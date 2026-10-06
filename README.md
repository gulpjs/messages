<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# `@gulpjs/messages`

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Symbols for all messages within gulp-cli.

## Usage

In your `.gulp.js` file:

```js
var messages = require("@gulpjs/messages");

module.exports = {
  message: function (data) {
    if (data.tag === messages.DESCRIPTION) {
      return "Your description override message";
    }
  },
};
```

## API

This project exposes various symbols assigned to keys to use for matching gulp-cli messages.

## Strict No LLM / No AI Policy

No LLMs for issues.

No LLMs for patches / pull requests.

No LLMs for comments on the bug tracker, including translation.

English is encouraged, but not required. You are welcome to post in your native language and rely on others to have their own translation tools of choice to interpret your words.

## License

MIT

<!-- prettier-ignore-start -->
[downloads-image]: https://img.shields.io/npm/dm/@gulpjs/messages.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@gulpjs/messages
[npm-image]: https://img.shields.io/npm/v/@gulpjs/messages.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/messages/actions/workflows/dev.yml
[ci-image]: https://img.shields.io/github/actions/workflow/status/gulpjs/messages/dev.yml?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/messages
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/messages/main.svg?style=flat-square
<!-- prettier-ignore-end -->
