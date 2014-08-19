"use strict"

class Atoms.Twitter.Organism.Main extends Atoms.Organism.Article

  # -- Children bubble events --------------------------------------------------
  onSailorSessionLogin: (event, dispatcher, hierarchy...) ->
    do @_sockets

  onSailorSessionSignup: (event, dispatcher, hierarchy...) ->
    do @_sockets

  onSailorSessionError: (event, dispatcher, hierarchy...) ->
    # Your code...

  # -- Private --------------------------------------------------
  _sockets: ->

    Sailor.socket "GET", Sailor.user, (users, jw) ->
      __.Entity.User.create user for user in users

    Sailor.socket "GET", Sailor.tweets, (tweets, jw) ->
      __.Entity.Tweet.create tweet for tweet in tweets

    Sailor.on Sailor.tweet, (tweet) ->
      __.Entity.Tweet.create tweet.data if tweet.verb is 'created'

    Sailor.on Sailor.user, (user) ->
      __.Entity.User.create user.data if user.verb is 'created'

    Atoms.Url.path "home/main"
