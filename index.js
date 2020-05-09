/* --------------------
 * simple-invariant module
 * Entry point
 * ------------------*/

'use strict';

// Constants
const DEFAULT_MESSAGE = 'Invariant failed';

// Exports

module.exports = function invariant(condition, message) {
	if (!condition) throw new Error(message || DEFAULT_MESSAGE);
};
