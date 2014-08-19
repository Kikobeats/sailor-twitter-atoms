class Atoms.Twitter.Dialog.Tweet extends Atoms.Organism.Dialog

  show: ->
    super
    do @onFormChange

  # -- Children bubble events --------------------------------------------------
  onClose: ->
    do @hide
    false

  onCancel: ->
    do @hide
    false

  onTweet: (event, button) ->
    form = @section.form

    tweet =
      body: form.value().tweet
      user: Sailor.session().id

    Sailor.proxy('POST', Sailor.tweet, tweet).then (error, tweet) =>
      if error
        @bubble "error", error
      else
        @bubble "tweet", tweet
        form.clean()
        do @hide

  onFormChange: =>
    form = @section.form.value()
    sendButton = @section.form.children[1]

    method = if (form.tweet.length is @_MIN_LENGHT) then "attr" else "removeAttr"
    sendButton.el[method] "disabled", true
    false

  onWrite: ->
    do @onFormChange

# -- Private -----------------------------------------------------------------
  _MIN_LENGHT: 0
