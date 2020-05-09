[![NPM version](https://img.shields.io/npm/v/simple-invariant.svg)](https://www.npmjs.com/package/simple-invariant)
[![Build Status](https://img.shields.io/travis/overlookmotel/simple-invariant/master.svg)](http://travis-ci.org/overlookmotel/simple-invariant)
[![Dependency Status](https://img.shields.io/david/overlookmotel/simple-invariant.svg)](https://david-dm.org/overlookmotel/simple-invariant)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/simple-invariant.svg)](https://david-dm.org/overlookmotel/simple-invariant)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookmotel/simple-invariant.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/simple-invariant/master.svg)](https://coveralls.io/r/overlookmotel/simple-invariant)

# Super-simple invariant function

## Usage

### What's it for?

Using invariants to throw errors has been popularized by [React](https://reactjs.org/). A commonly-used NPM package is [tiny-invariant](https://www.npmjs.com/package/tiny-invariant).

`invariant` performs two purposes:

1. A terser syntax for throwing errors
2. Removal of lengthy error messages from production builds to save bytes with e.g. [babel-plugin-dev-expression](https://www.npmjs.com/package/babel-plugin-dev-expression)

In the case of NodeJS apps, code size is often less of a issue, and you may not want to remove useful error messages when running an app in production mode. However, you may well like using the `invariant()` syntax anyway.

That's where this package comes in.

### What is this package?

It's the simplest possible invariant function. The code is:

```js
function invariant( condition, message ) {
  if ( !condition ) {
    throw new Error( message || 'Invariant failed' );
  }
};
```

So, this code:

```js
if ( !foo ) throw new Error( 'foo must be truthy' );
```

...can be replaced with the shorter:

```js
invariant( foo, 'foo must be truthy' );
```

### Isn't this the same as tiny-invariant?

Pretty much. The only difference is that the error thrown will *always* have the full error message, regardless of whether `process.env.NODE_ENV === 'production'` or not.

## Versioning

This module follows [semver](https://semver.org/). Breaking changes will only be made in major version updates.

All active NodeJS release lines are supported (v10+ at time of writing). After a release line of NodeJS reaches end of life according to [Node's LTS schedule](https://nodejs.org/en/about/releases/), support for that version of Node may be dropped at any time, and this will not be considered a breaking change. Dropping support for a Node version will be made in a minor version update (e.g. 1.2.0 to 1.3.0). If you are using a Node version which is approaching end of life, pin your dependency of this module to patch updates only using tilde (`~`) e.g. `~1.2.3` to avoid breakages.

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/simple-invariant/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/simple-invariant/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add tests for new features
* document new functionality/API additions in README
* do not add an entry to Changelog (Changelog is created when cutting releases)
