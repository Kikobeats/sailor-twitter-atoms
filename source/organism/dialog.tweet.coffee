class Atoms.Twitter.Dialog.Tweet extends Atoms.Organism.Dialog

  show: ->
    super
    do @onFormChange
    do @_bindClose

  # -- Children bubble events --------------------------------------------------
  onClose: ->
    do @hide

  onCancel: ->
    do @hide

  onSend: (event, button) ->
    form = @section.form
    tweet =
      body: form.value().tweet
      user: Sailor.store('user').id

    Sailor.socket('POST', Sailor.tweet, tweet).then (error, tweet) =>
      if error
        @bubble "error", error
      else
        @bubble "tweet", tweet
        __.Entity.Tweet.create tweet
        form.clean()
        do @hide

  onFormChange: =>
    form = @section.form.value()
    sendButton = @section.form.children[1]

    method = if (form.tweet.length is @_MIN_LENGHT) then "attr" else "removeAttr"
    sendButton.el[method] "disabled", true

  onWrite: ->
    do @onFormChange

# -- Private -----------------------------------------------------------------
  _MIN_LENGHT: 0

  _bindClose: ->
    type = if isMobile() then 'tap' else 'click'
    @el.parent().on type or "click", =>
      do @hide
