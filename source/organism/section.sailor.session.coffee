"use strict"

class Atoms.Organism.SailorSession extends Atoms.Organism.Section

  @extends  : true

  @events   : ["login", "signup", "error"]

  @default  :
    style   : "centered",
    children: [
      "Atom.Image": url: 'assets/images/logo.png'
    ,
      "Molecule.Form": id: "form", events: ["change"], children: [
        "Atom.Input": id: "mail", type:"email", name: "mail", placeholder: "Email...", events: ["keyup"], required: true
      ,
        "Atom.Input": id: "password", type:"password", name: "password", placeholder: "Password...", events: ["keyup"], required: true
      ,
        "Atom.Button": text: "Login", path: "tweet/main", action: "login", style: "fluid theme", callbacks: ["onSubmit"]
      ,
        "Atom.Button": text: "Signup", action: "signup", style: "fluid", callbacks: ["onSubmit"]
      ]
    ,
      "Atom.Text": value: "© All Rights Reserved"
    ]

  render: ->
    super
    do @onFormChange

  onFormChange: =>
    form = @form.value()
    method = if (form.mail.length is @_MIN_LENGHT or form.password.length is @_MIN_LENGHT) then "attr" else "removeAttr"
    for child in @form.children when not child.value
      child.el[method] "disabled", true
    false

  onSubmit: (event, button) ->
    action   = button.attributes.action
    values   = @form.value()

    if action is 'signup'
      user =
        email: values.mail
        password: values.password
    else
      user =
        identifier: values.mail
        password: values.password

    Sailor.proxy('POST', Sailor[action], user).then (error, user) =>
      if error
        @bubble "error", error
      else
        delete user.tweets
        Sailor.session user
        @bubble action, user

  # -- Private -----------------------------------------------------------------
  _MIN_LENGHT: 0
