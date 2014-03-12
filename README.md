Sort.js
==========

nat-sort and random-sort implement.

# Document

https://github.com/uupaa/Sort.js/wiki/Sort

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

# for Developers

1. Install development dependency tools

    ```sh
    $ brew install closure-compiler
    $ brew install node
    $ npm install -g plato
    ```

2. Clone Repository and Install

    ```sh
    $ git clone git@github.com:uupaa/Sort.js.git
    $ cd Sort.js
    $ npm install
    ```

3. Build and Minify

    `$ npm run build`

4. Test

    `$ npm run test`

5. Lint

    `$ npm run lint`


