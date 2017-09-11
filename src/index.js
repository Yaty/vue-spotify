(function () {

/**
 * Install plugin
 * @param Vue
 * @param spotify
 */

function plugin (Vue, spotify) {
  if (plugin.installed) return
  plugin.installed = true

  if (!spotify) {
      console.error('You have to install spotify-web-api-node.')
      return
  }

  Vue.spotify = spotify

  Object.defineProperties(Vue.prototype, {
    spotify: {
      get () {
          return spotify
      }
    }
  })
}

if (typeof exports == "object") {
  module.exports = plugin
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin })
} else if (window.Vue && window.spotify) {
  Vue.use(plugin, window.spotify)
}

})();
