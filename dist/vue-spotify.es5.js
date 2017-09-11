"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

  /**
   * Install plugin
   * @param Vue
   * @param spotify
   */

  function plugin(Vue, spotify) {
    if (plugin.installed) return;
    plugin.installed = true;

    if (!spotify) {
      console.error('You have to install spotify-web-api-node.');
      return;
    }

    Vue.spotify = spotify;

    Object.defineProperties(Vue.prototype, {
      spotify: {
        get: function get() {
          return spotify;
        }
      }
    });
  }

  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object") {
    module.exports = plugin;
  } else if (typeof define == "function" && define.amd) {
    define([], function () {
      return plugin;
    });
  } else if (window.Vue && window.spotify) {
    Vue.use(plugin, window.spotify);
  }
})();