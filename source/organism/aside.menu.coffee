"use strict"

class Atoms.Twitter.Organism.Menu extends Atoms.Organism.Aside

  # -- Children bubble events --------------------------------------------------
  onLogout: -> do Sailor.logout
