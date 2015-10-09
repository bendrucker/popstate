'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')
var nextTick = require('next-tick')
var EventTarget = require('dom-event-target')

test(function (t) {
  t.plan(1)

  var window = new EventTarget()
  var popState = proxyquire('./', {
    'window-load': function (callback) {
      callback()
    },
    'global/window': window
  })

  popState(t.pass)
  nextTick(function () {
    window.send('popstate')
  })
})
