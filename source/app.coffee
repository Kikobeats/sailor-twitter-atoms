"use strict"

window.Sailor = ((env) ->
  lang = navigator.language.split("-")[0]
  if env is 'development' then api = 'http://localhost:1342' else api = 'http://sailor-twitter-api.herokuapp.com'

  _proxy = (type, method, parameters = {}, background = false) ->
    promise = new Hope.Promise()
    unless background then __.Dialog.Loading.show()
    token = if session? then session.token else null
    $$.ajax
      url         : "#{api}/#{lang}/#{method}"
      type        : type
      data        : parameters
      dataType    : 'json'
      contentType : "application/x-www-form-urlencoded"
      success: (xhr) ->
        unless background then do __.Dialog.Loading.hide
        promise.done null, xhr
      error: (xhr, response) =>
        unless background then do __.Dialog.Loading.hide
        error = code: xhr.status, message: xhr.responseJSON.message
        promise.done error, null
    promise

  _socket = (type, method, parameters = {}) ->
    io.socket[type.toLowerCase()] "/#{lang}/#{method}", parameters, (res, jw) =>

  _on = (Model, callback) -> io.socket.on Model, (callback)

  _session = (data = {}) ->
    # TODO: sessionStorage or localStorage?
    if Object.keys(data).length is 0
      JSON.parse(sessionStorage.getItem('user'))
    else
      sessionStorage.setItem('user', JSON.stringify(data))

  # EXPORTS
  ## URL Paths
  host    : api
  login   : "user/login"
  signup  : "user"
  user    : "user"
  tweet   : "tweet"
  tweets  : "tweet?sort=id asc"
  ## Methods
  proxy   : _proxy
  socket  : _socket
  on      : _on
  session : _session
  ## Environment
  env     : env
)("production")

window.Atoms.Twitter = do ->
  Organism: {}
  Molecule: {}
  Dialog  : {}
