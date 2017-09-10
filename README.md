# vue-spotify
A small wrapper for integrating spotify-web-api-node to Vuejs

## How to install:
### CommonJS:
```
npm install --save spotify-web-api-node vue-spotify
```

And in your entry file:
```
import Vue from 'vue'
import Spotify from 'spotify-web-api-node'
import VueSpotify from 'vue-spotify'

Vue.use(VueSpotify, new Spotify())
```

### Script:
Just add 3 scripts in order: `vue`, `spotify-web-api-node` and `vue-spotify` to your `document`.

## Usage:
This wrapper bind [spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node/blob/master/README.md) to `Vue` or `this` if you're using single file component.

First authenticate with the spotify Web API with the client credential : [how to here](https://github.com/thelinmichael/spotify-web-api-node#authorization).

Do not use your own credentials if your application is public !

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
