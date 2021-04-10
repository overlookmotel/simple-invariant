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

describe('throws error if condition false', () => {
	it('with error message', () => {
		expect(() => invariant(false, 'My error')).toThrow(new Error('My error'));
	});

	it('with no error message', () => {
		expect(() => invariant(false)).toThrow(new Error('Invariant failed'));
	});

	it('with empty error message', () => {
		expect(() => invariant(false, '')).toThrow(new Error('Invariant failed'));
	});

	it('with stack trace not including invariant function itself', () => {
		const err = tryCatch(() => invariant(false));
		expect(err).toBeInstanceOf(Error);
		const lines = err.stack.split(/\r?\n\s*/);
		expect(lines[0]).toBe('Error: Invariant failed');
		expect(lines[1]).toStartWith(`at fn (${__filename}:`);
	});
});

describe('does not throw error if condition true', () => {
	it('with error message', () => {
		expect(() => invariant(true, 'My error')).not.toThrow();
	});

	it('with no error message', () => {
		expect(() => invariant(true)).not.toThrow();
	});
});

function tryCatch(fn) {
	try {
		fn();
		return undefined;
	} catch (err) {
		return err;
	}
}
