# callback.flow

[![travis][travis.icon]][travis.url]
[![package][version.icon] ![downloads][downloads.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]

Just `Callback<x, a>` interface definition for use with flow projects that interface with nodejs callback based APIs. `Callback<x, a>` is a function that can be used to report success or failure of the async operation:

If operation is succeeds callback must be invoked with two arguments first of type either `null|void` and second of type `a` - `callback(null, value)`

If operation is fails callback must be invoked with single argument of type `x` - `callback(error)`

Please note that success type paramater is optional and defaults to `void` there for callbacks that don't pass data back can be typed as `Callback<string>` and also be invoked as `callback()` to report success and `callback('Oops')` to report failure.

## Usage

```js
import type { Callback } from "callback.flow"

export const readAsync = (
  address: string,
  callback: Callback<Error, string>
): void => {
  if (isValid(address)) {
    // ....
    callback(null, content)
  } else {
    callback(new Error("Invalid Address"))
  }
}
```

## Install

    npm install callback.flow

[travis.icon]: https://travis-ci.org/Gozala/callback.flow.svg?branch=master
[travis.url]: https://travis-ci.org/Gozala/callback.flow
[version.icon]: https://img.shields.io/npm/v/callback.flow.svg
[downloads.icon]: https://img.shields.io/npm/dm/callback.flow.svg
[package.url]: https://npmjs.org/package/callback.flow
[downloads.image]: https://img.shields.io/npm/dm/callback.flow.svg
[downloads.url]: https://npmjs.org/package/callback.flow
[prettier.icon]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier.url]: https://github.com/prettier/prettier
