"use strict"

window.Atoms.Twitter = do ->
  Entity  : {}
  Organism: {}
  Molecule: {}
  Dialog  : {}

window.debug = (message) ->
  console.log "DEBUG :: #{message}" if Sailor.environment() is 'development'
