"use strict"

class Atoms.Twitter.Organism.Home extends Atoms.Organism.Article

  render: ->
    super

  # -- Children bubble events --------------------------------------------------
  onTweetButton: (event, dispatcher, hierarchy...) ->
    __.Dialog.Tweet.show()
