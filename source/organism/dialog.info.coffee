class Atoms.Twitter.Dialog.Info extends Atoms.Organism.Dialog

  show: ->
    super
    do @_bindKeys

  view: (message) ->
    @section.text.el.html message
    do @show

  # -- Children bubble events --------------------------------------------------
  onClose: ->
    do @hide
    false

  # -- Private -----------------------------------------------------------------
  _bindKeys: ->
    type = if isMobile() then 'tap' else 'click'
    parent = @el.parent()

    parent.on type, (event) =>
     if event.target is parent[0]
       parent.off type
       do @hide
