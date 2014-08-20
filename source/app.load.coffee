"use strict"

Atoms.$ ->
  console.log "------------------------------------------------------------"
  console.log "Atoms v#{Atoms.version} (Atoms.App v#{Atoms.App.version})"
  console.log "------------------------------------------------------------"

  new Atoms.Twitter.Organism.Main {}, "assets/scaffold/article.main.json"
  new Atoms.Twitter.Organism.Home {}, "assets/scaffold/article.home.json"
  new Atoms.Twitter.Organism.Menu {}, "assets/scaffold/aside.menu.json"
  new Atoms.Twitter.Dialog.Tweet {}, "assets/scaffold/dialog.tweet.json"

  unless Sailor.session()?
    Atoms.Url.path "main/login"
  else
    Atoms.Twitter.start()
    Atoms.Url.path Atoms.Url.path().substr(1) or "home/main"
