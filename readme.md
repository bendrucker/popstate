# popstate [![Build Status](https://travis-ci.org/bendrucker/popstate.svg?branch=master)](https://travis-ci.org/bendrucker/popstate)

> Listen on popstate history events with Safari compatibility

Old versions of Chrome and all versions of Safari emit `popstate` events on page load [(MDN)](https://developer.mozilla.org/en-US/docs/Web/Events/popstate). popstate defers registration of the event listener to avoid double-calls.

## Install

```
$ npm install --save popstate
```


## Usage

```js
var popState = require('popstate')

popState(function (event) {
  //=> popped state  
})
```

## API

#### `popState(callback)` -> `undefined`

##### callback

*Required*  
Type: `function`

A callback to safely register for `popstate` events.


## License

MIT © [Ben Drucker](http://bendrucker.me)
