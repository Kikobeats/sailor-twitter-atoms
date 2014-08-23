"use strict"

class Atoms.Twitter.Organism.Main extends Atoms.Organism.Article

  # -- Children bubble events --------------------------------------------------
  onSailorSessionLogin: (event, dispatcher, hierarchy...) ->
    do @_handler

  onSailorSessionSignup: (event, dispatcher, hierarchy...) ->
    do @_handler

  onSailorSessionError: (event, dispatcher, hierarchy...) ->
    __.Dialog.Info.view event.message

  # -- Private --------------------------------------------------
  _handler: ->
    do Atoms.Twitter.start
    Atoms.Url.path "home/main"
