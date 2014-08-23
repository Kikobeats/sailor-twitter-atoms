"use strict"

window.Sailor.registerEndpoint('login', 'user/login')
window.Sailor.registerEndpoint('signup', 'user')
window.Sailor.registerEndpoint('user', 'user')
window.Sailor.registerEndpoint('tweet', 'tweet', 'sort', 'id asc')


# TODO: Encerrar en al funcion proxy si es posibles
# Sailor.loadingOn  = __.Dialog.Loading.show()
# Sailor.loadingOff = __.Dialog.Loading.hide()

window.Sailor.start = ->

  # Sailor.proxy('GET', Sailor.user).then (error, users) =>
  #   __.Entity.User.create user for user in users

  Sailor.socket('GET', Sailor.user).then (error, users) ->
    __.Entity.User.create user for user in users unless error

  Sailor.socket('GET', Sailor.tweet).then (error, tweets) ->
    __.Entity.Tweet.create tweet for tweet in tweets unless error

  Sailor.on Sailor.tweet, (tweet) ->
    __.Entity.Tweet.create tweet.data if tweet.verb is 'created'

  Sailor.on Sailor.user, (user) ->
    __.Entity.User.create user.data if user.verb is 'created'

# window.Sailor.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.InNhaWxvcmpzIg.F860b-9kK3d1k8ESaFIwek_W5BMH2U8-qEE8TbTv-0k'
