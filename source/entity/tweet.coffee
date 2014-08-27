"use strict"

class __.Entity.Tweet extends Atoms.Class.Entity

  @fields "id", "body", "user", "createdAt", "updatedAt"

  parse: ->
    text        : @user.email
    info        : @timeFormat()
    description : @body

  timeFormat: ->
    moment(@createdAt).fromNow(true)

  userName: ->
    username = @user.email.split("@")[0]
