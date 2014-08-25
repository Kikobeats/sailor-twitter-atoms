"use strict"

Sailor.registerEndpoint('login', 'user/login')
Sailor.registerEndpoint('signup', 'user')
Sailor.registerEndpoint('user', 'user')
Sailor.registerEndpoint('tweet', 'tweet', 'sort', 'id asc')

Sailor.loadingOn  = __.Dialog.Loading.show.bind(__.Dialog.Loading)
Sailor.loadingOff = __.Dialog.Loading.hide.bind(__.Dialog.Loading)

Sailor.start = ->
  Sailor.socket('GET', Sailor.user).then (error, users) ->
    console.log users
    __.Entity.User.create user for user in users unless error

  Sailor.socket('GET', Sailor.tweet).then (error, tweets) ->
    console.log tweets
    __.Entity.Tweet.create tweet for tweet in tweets unless error

  Sailor.on Sailor.tweet, (tweet) ->
    console.log tweet
    __.Entity.Tweet.create tweet.data if tweet.verb is 'created'

  Sailor.on Sailor.user, (user) ->
    __.Entity.User.create user.data if user.verb is 'created'
