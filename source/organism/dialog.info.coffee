class Atoms.Twitter.Dialog.Info extends Atoms.Organism.Dialog

  show: ->
    super
    do @_bindClose

  view: (message) ->
    @section.text.el.html message
    do @show

  # -- Children bubble events --------------------------------------------------
  onClose: ->
    do @hide
    false

  # -- Private -----------------------------------------------------------------
  _bindClose: ->
    type = if isMobile() then 'tap' else 'click'
    @el.parent().on type or "click", =>
      do @hide
