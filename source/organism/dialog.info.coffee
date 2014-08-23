class Atoms.Twitter.Dialog.Info extends Atoms.Organism.Dialog

  @events   : ["show", "hide"]

  view: (message) ->
    @section.text.el.html message
    do @show

  # -- Children bubble events --------------------------------------------------
  onClose: ->
    do @hide
    false
