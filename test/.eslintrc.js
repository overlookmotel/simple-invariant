/* --------------------
 * simple-invariant module
 * Tests ESLint config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-jest'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^simple-invariant$']}],
		'node/no-missing-require': ['error', {allowModules: ['simple-invariant']}]
	}
};
