#!/usr/bin/env node

const adventure = require('adventure')

process.noDeprecation = true

const shop = adventure({
  title: 'JEST DO IT!',
  name: 'jest-do-it'
})

shop.add('» THEY SEE ME WOOFING', () => require('./exercises/they-see-me-woofing'))
shop.add('» TONIGHT I CONCLUDE', () => require('./exercises/tonight-i-conclude'))
shop.add('» THAT\'S MY NAME', () => require('./exercises/thats-my-name'))

shop.execute(process.argv.slice(2))
