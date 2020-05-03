/* --------------------
 * simple-invariant module
 * Tests
 * ------------------*/

'use strict';

// Modules
const invariant = require('simple-invariant');

// Init
require('./support/index.js');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect(invariant).not.toBeUndefined();
	});
});
