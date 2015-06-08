# Sort.js [![Build Status](https://travis-ci.org/uupaa/Sort.js.svg)](https://travis-ci.org/uupaa/Sort.js)

[![npm](https://nodei.co/npm/uupaa.sort.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.sort.js/)

Sort functions.


- Sort.js made of [WebModule](https://github.com/uupaa/WebModule).
- [Spec](https://github.com/uupaa/Sort.js/wiki/Sort)

## Browser and NW.js(node-webkit)

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/Sort.js"></script>
<script>
console.log( WebModule.Sort.nat(["aa-123", "aa-10", "aa-100"]) ); // ["aa-10", "aa-100", "aa-123"]
</script>
```

## WebWorkers

```js
importScripts("<module-dir>lib/WebModule.js");
importScripts("<module-dir>lib/Sort.js");

```

## Node.js

```js
require("<module-dir>lib/WebModule.js");
require("<module-dir>lib/Sort.js");

```

