"use strict"

window.Atoms.Twitter = do ->
  Entity  : {}
  Atom    : {}
  Organism: {}
  Molecule: {}
  Dialog  : {}

window.debug = (message) ->
  console.log "DEBUG :: #{message}" if Sailor.environment() is 'development'
