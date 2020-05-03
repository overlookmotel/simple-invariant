/* --------------------
 * simple-invariant module
 * Entry point
 * ------------------*/

'use strict';

// Constants
const PREFIX = 'Invariant failed';

// Exports

module.exports = function invariant(condition, message) {
	if (!condition) throw new Error(message ? `${PREFIX}: ${message}` : PREFIX);
};
