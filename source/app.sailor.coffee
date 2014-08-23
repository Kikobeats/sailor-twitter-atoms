"use strict"

Sailor.$ ->
  Sailor.login  = "user/login"
  Sailor.signup = "user"
  Sailor.user   = "user"
  Sailor.tweet  = "tweet"
  Sailor.tweets = "tweet?sort=id asc"

  # Sailor.registerEndpoint('login', 'user/login')
  # Sailor.registerEndpoint('signup', 'user')
  # Sailor.registerEndpoint('user', 'user')
  # Sailor.registerEndpoint('tweet', 'tweet')
  # Sailor.registerEndpoint('tweets', 'tweets', 'sort', 'id asc')

  # Sailor.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InNhaWxvcmpzIg.F860b-9kK3d1k8ESaFIwek_W5BMH2U8-qEE8TbTv-0k'

  # TODO: Encerrar en al funcion proxy si es posibles
  # Sailor.loadingOn  = __.Dialog.Loading.show()
  # Sailor.loadingOff = __.Dialog.Loading.hide()

  Sailor.start = ->
    Sailor.socket "GET", Sailor.user, (users, jw) ->
      __.Entity.User.create user for user in users

    Sailor.socket "GET", Sailor.tweets, (tweets, jw) ->
      __.Entity.Tweet.create tweet for tweet in tweets

    Sailor.on Sailor.tweet, (tweet) ->
      __.Entity.Tweet.create tweet.data if tweet.verb is 'created'

    Sailor.on Sailor.user, (user) ->
      __.Entity.User.create user.data if user.verb is 'created'
