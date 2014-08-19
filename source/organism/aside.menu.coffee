"use strict"

class Atoms.Twitter.Organism.Menu extends Atoms.Organism.Aside

  # -- Children bubble events --------------------------------------------------
  onHome: ->
    console.log 'Home button ::'

  onConfiguration: ->
    console.log 'Home button ::'

  onLogout: ->
    localStorage.removeItem 'user'
    Atoms.Url.path "main/login"
