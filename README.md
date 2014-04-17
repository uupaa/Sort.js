=========
Sort.js
=========

![](https://travis-ci.org/uupaa/Sort.js.png)

nat-sort and random-sort implement.

# Document

- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [Sort.js wiki](https://github.com/uupaa/Sort.js/wiki/Sort)


# How to use

```js
<script src="lib/Sort.js">
<script>
// for Browser
console.log( Sort.nat(["aa-123", "aa-10", "aa-100"]) ); // ["aa-10", "aa-100", "aa-123"]
</script>
```

```js
// for WebWorkers
importScripts("lib/Sort.js");

console.log( Sort.nat(["aa-123", "aa-10", "aa-100"]) ); // ["aa-10", "aa-100", "aa-123"]
```

```js
// for Node.js
var Sort = require("lib/Sort.js");

console.log( Sort.nat(["aa-123", "aa-10", "aa-100"]) ); // ["aa-10", "aa-100", "aa-123"]
```

