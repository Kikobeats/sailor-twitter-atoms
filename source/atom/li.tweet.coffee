"use strict"

class Atoms.Twitter.Atom.Tweet extends Atoms.Atom.Li

  @default:
    method: 'prepend'

  @template : """
    <li {{#if.style}}class="{{style}}"{{/if.style}}>
      {{#if.image}}<figure><span class="icon loading-d"></span></figure>{{/if.image}}
      <div>
        {{#if.info}}<span>{{info}}</span>{{/if.info}}
        {{#if.text}}<strong>{{text}}</strong>{{/if.text}}
        {{#if.description}}<small>{{description}}</small>{{/if.description}}
      </div>
    </li>"""
