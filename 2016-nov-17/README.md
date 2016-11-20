# Minimal ES-2015/ES6/ES* examples of Callbacks, Promises, Generators, Async Functions, and Race Conditions

In the `./src` directory.

## Race Condition Example

Imagine a search page that calls a search API:
* <tt>11:30:01</tt>: search.js sends request to API for "kitch" results
* <tt>11:30:02</tt>: search.js sends request to API for "kitchen" results
* <tt>11:30:05</tt>: API responds with results for "kitchen", so search.js displays those results.
* <tt>11:30:06</tt>: API responds with results for "kitch", so search.js displays those results.
