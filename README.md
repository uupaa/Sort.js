# Sort.js [![Build Status](https://travis-ci.org/uupaa/Sort.js.png)](http://travis-ci.org/uupaa/Sort.js)

[![npm](https://nodei.co/npm/uupaa.sort.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.sort.js/)

Sort functions.

## Document

- [Sort.js wiki](https://github.com/uupaa/Sort.js/wiki/Sort)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## Run on

### Browser and node-webkit

```js
<script src="lib/Sort.js"></script>
<script>
console.log( Sort.nat(["aa-123", "aa-10", "aa-100"]) ); // ["aa-10", "aa-100", "aa-123"]
</script>
```

### WebWorkers

```js
importScripts("lib/Sort.js");

```

### Node.js

```js
require("lib/Sort.js");

```

