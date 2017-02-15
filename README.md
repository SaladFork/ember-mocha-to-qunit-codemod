# ember-mocha-to-qunit-codemod

A codemod script for transforming an [Ember.js](https://github.com/emberjs/ember.js) application that uses [Mocha](https://github.com/mochajs/mocha) tests (through [ember-mocha](https://github.com/emberjs/ember-mocha)) to [QUnit](https://github.com/qunitjs/qunit) tests (through [ember-qunit](https://github.com/emberjs/ember-qunit)).

## Usage

```bash
$ jscodeshift -t transform.js test/empty-unit-test/input.js -d -p
```
