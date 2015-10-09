'use strict'

var onLoad = require('window-load')
var window = require('global/window')
var nextTick = require('next-tick')

module.exports = function onPopState (callback) {
  onLoad(function schedule () {
    nextTick(function listen () {
      window.addEventListener('popstate', callback)
    })
  })
}
