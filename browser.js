"use strict"

const Bundler = require("./bundle")
const WS = require("libp2p-websockets")
module.exports = Bundler({
  name: "ZeroNetBrowserBundle",
  modules: {},
  override: {
    swarm: {
      zero: {
        listen: [],
        transports: [],
        trackers: false
      },
      libp2p: {
        listen: [],
        transports: [
          new WS()
        ]
      }
    }
  }
})
