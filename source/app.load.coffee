"use strict"

Atoms.$ ->
  console.log "------------------------------------------------------------"
  console.log "Atoms v#{Atoms.version} (Sailor v#{Sailor.version})         "
  console.log "------------------------------------------------------------"

  new Atoms.Twitter.Organism.Main {}, "assets/scaffold/article.main.json"
  new Atoms.Twitter.Organism.Home {}, "assets/scaffold/article.home.json"
  new Atoms.Twitter.Organism.Menu {}, "assets/scaffold/aside.menu.json"
  new Atoms.Twitter.Dialog.Tweet {}, "assets/scaffold/dialog.tweet.json"
  new Atoms.Twitter.Dialog.Info {}, "assets/scaffold/dialog.info.json"

  unless Sailor.store('user')?
    Atoms.Url.path "main/login"
  else
    # Sailor.start()
    Atoms.Url.path Atoms.Url.path().substr(1) or "home/main"
