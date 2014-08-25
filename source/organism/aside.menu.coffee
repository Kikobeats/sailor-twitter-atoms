"use strict"

class Atoms.Twitter.Organism.Menu extends Atoms.Organism.Aside

  # -- Children bubble events --------------------------------------------------
  onLogout: ->
    localStorage.removeItem 'user'
    Atoms.Url.path "main/login"
