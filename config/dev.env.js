'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {

  NODE_ENV: '"development"',   
  VUE_APP_MAPBOX_KEY: '"pk.eyJ1IjoiZmVydGlvZ2EiLCJhIjoiY2ttb3hhNzlkMjh6YjJ1bWkxb3kxYWx4dyJ9.BfwyZFFMx1T034PrJwHuAg"'

})
