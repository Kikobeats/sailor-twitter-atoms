"use strict"

Sailor.$ ->
  window.Sailor.login  = "user/login"
  window.Sailor.signup = "user"
  window.Sailor.user   = "user"
  window.Sailor.tweet  = "tweet"
  window.Sailor.tweets = "tweet?sort=id asc"

  Sailor.registerEnvironment 'development', 'http://localhost:1337'

  window.Sailor.start = ->
    Sailor.socket "GET", Sailor.user, (users, jw) ->
      __.Entity.User.create user for user in users

    Sailor.socket "GET", Sailor.tweets, (tweets, jw) ->
      __.Entity.Tweet.create tweet for tweet in tweets

    Sailor.on Sailor.tweet, (tweet) ->
      __.Entity.Tweet.create tweet.data if tweet.verb is 'created'

    Sailor.on Sailor.user, (user) ->
      __.Entity.User.create user.data if user.verb is 'created'

  Sailor.environment 'development'
  Sailor.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InNhaWxvcmpzIg.F860b-9kK3d1k8ESaFIwek_W5BMH2U8-qEE8TbTv-0k'
