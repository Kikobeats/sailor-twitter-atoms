"use strict"

class __.Entity.Tweet extends Atoms.Class.Entity

  @fields "id", "body", "user", "createdAt", "updatedAt"

  parse: ->
    text        : @getEmail(@user)
    info        : @timeFormat
    description : @body

  timeFormat: ->
    window.moment(@createdAt).fromNow(true)

  getEmail: (user) ->
    return user.email if user?.email?
    Sailor.session().email
