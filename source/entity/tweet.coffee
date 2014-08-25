"use strict"

class __.Entity.Tweet extends Atoms.Class.Entity

  @fields "id", "body", "user", "createdAt", "updatedAt"

  parse: ->
    text        : @onlyName(@user.email)
    info        : @timeFormat()
    description : @body

  timeFormat: ->
    moment(@createdAt).fromNow(true)

  onlyName: (mail) ->
    mail.split("@")[0]


