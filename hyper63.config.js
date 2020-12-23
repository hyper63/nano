const path = require('path')
const mkdirp = require('mkdirp')
const express = require('@hyper63/app-express')
const pouchdb = require('@hyper63/adapter-pouchdb')
const fs = require('@hyper63/adapter-fs')
const memory = require('@hyper63/adapter-memory')
const minisearch = require('@hyper63/adapter-minisearch')



const dir = process.env.DATA_PATH || path.resolve(process.env.HOME + '/.hyper63')
mkdirp.sync(dir)

console.log('dir', dir)

module.exports = {
  app: express,
  adapters: [
    { port: 'cache', plugins: [memory()]},
    { port: 'data', plugins: [pouchdb({dir})]},
    { port: 'storage', plugins: [fs({dir})]},
    { port: 'search', plugins: [minisearch()]}
  ]
}

