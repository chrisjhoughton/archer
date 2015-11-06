# Archer

Simple promise wrapper around the [Needle](https://github.com/tomas/needle) API. 

## Installation

Install via NPM: `npm install archer-node --save`

And require it into your modules

```js
var archer = require('archer-node');
```

## Usage

Pass the same arguments as you would to Needle, but exclude the callback, instead use `done` or `spread`.
Note that `spread` is recommended as the promise is resolved as an array of arguments (`response` and `body`).

```js
archer.get('https://us5.api.mailchimp.com/schema/3.0/Lists/Instance.json').spread(function (res, body) {
  console.log(res.statusCode, body);
});
```