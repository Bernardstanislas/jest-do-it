#!/usr/bin/env node

var adventure = require('adventure')

process.noDeprecation = true

var shop = adventure({
  title: 'JEST DO IT!',
  name: 'jest-do-it'
})

shop.add('» THEY SEE ME WOOFING',
  function () { return require('./exercises/they-see-me-woofing') })

shop.execute(process.argv.slice(2))
