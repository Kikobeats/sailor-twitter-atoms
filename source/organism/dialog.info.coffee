class Atoms.Twitter.Dialog.Info extends Atoms.Organism.Dialog

  view: (message) ->
    @section.text.el.html message
    do @show

  # -- Children bubble events --------------------------------------------------
  onClose: ->
    do @hide
    false
