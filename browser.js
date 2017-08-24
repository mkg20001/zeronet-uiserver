"use strict"

const Bundler = require("./bundle")
const WS = require("libp2p-websockets")
module.exports = Bundler({
  name: "ZeroNetBrowserBundle",
  modules: {},
  override: {
    swarm: {
      libp2p: {
        transport: [
          new WS()
        ],
        mdns: false,
        dht: false
      }
    }
  }
})
