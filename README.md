<p align="center">
  <a href="https://www.npmjs.com/package/vue-spotify"><img src="https://img.shields.io/npm/dm/vue-spotify.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-spotify"><img src="https://img.shields.io/npm/v/vue-spotify.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-spotify"><img src="https://img.shields.io/npm/l/vue-spotify.svg" alt="License"></a>
</p>

# vue-spotify
A small wrapper for integrating spotify-web-api-node to Vuejs

## How to install:
### CommonJS:
```
npm install --save spotify-web-api-node vue-spotify
```

And in your entry file:
``` javascript
import Vue from 'vue'
import Spotify from 'spotify-web-api-node'
import VueSpotify from 'vue-spotify'

Vue.use(VueSpotify, new Spotify())
```

## Usage:
This wrapper bind [spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node/blob/master/README.md) to `Vue` or `this` if you're using single file component.

First authenticate with the spotify Web API with the client credential **server-side** [how to here](https://github.com/thelinmichael/spotify-web-api-node#authorization).

(**WARNING** : You can't fetch a token from a browser with spotify-web-api-node you need to to it **server-side**.).

Then add it in your application : `this.spotify.setAccessToken(ACCESS_TOKEN)`.

Then you can use `spotify-web-api-node` like this:
``` javascript
Vue.spotify.getUser('petteralexis')
   .then(function(data) {
       console.log('Some information about this user', data.body);
   }, function(err) {
       console.log('Something went wrong!', err);
   })
   

this.spotify.getUser('petteralexis')
    .then(function(data) {
        console.log('Some information about this user', data.body);
    }, function(err) {
        console.log('Something went wrong!', err);
    })

```
