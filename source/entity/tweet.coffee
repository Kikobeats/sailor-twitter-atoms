"use strict"

class __.Entity.Tweet extends Atoms.Class.Entity

  @fields "id", "body", "user", "createdAt", "updatedAt"

  parse: ->
    text        : @user.email
    info        : @timeFormat
    description : @body

  timeFormat: ->
    window.moment(@createdAt).fromNow(true)
