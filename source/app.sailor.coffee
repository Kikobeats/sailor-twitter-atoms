"use strict"

window.Sailor.registerEndpoint('login', 'user/login')
window.Sailor.registerEndpoint('signup', 'user')
window.Sailor.registerEndpoint('user', 'user')
window.Sailor.registerEndpoint('tweet', 'tweet', 'sort', 'id asc')

Sailor.loadingOn  = __.Dialog.Loading.show.bind(__.Dialog.Loading)
Sailor.loadingOff = __.Dialog.Loading.hide.bind(__.Dialog.Loading)

window.Sailor.start = ->
  Sailor.socket('GET', Sailor.user).then (error, users) ->
    console.log users
    Atoms.Twitter.Entity.User.create user for user in users unless error

  Sailor.socket('GET', Sailor.tweet).then (error, tweets) ->
    console.log tweets
    Atoms.Twitter.Entity.Tweet.create tweet for tweet in tweets unless error

  Sailor.on Sailor.tweet, (tweet) ->
    console.log tweet
    Atoms.Twitter.Entity.Tweet.create tweet.data if tweet.verb is 'created'

  Sailor.on Sailor.user, (user) ->
    Atoms.Twitter.Entity.User.create user.data if user.verb is 'created'
