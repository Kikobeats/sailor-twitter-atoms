"use strict"

class Atoms.Twitter.Organism.Main extends Atoms.Organism.Article

  # -- Children bubble events --------------------------------------------------
  onSailorSessionLogin: (event, dispatcher, hierarchy...) ->
    do @_handler

  onSailorSessionSignup: (event, dispatcher, hierarchy...) ->
    do @_handler

  onSailorSessionError: (event, dispatcher, hierarchy...) ->
    console.log 'Sailor Error ::'

  # -- Private --------------------------------------------------
  _handler: ->
    do Atoms.Twitter.start
    Atoms.Url.path "home/main"
