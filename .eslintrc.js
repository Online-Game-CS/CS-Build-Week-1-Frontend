module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/jsx-filename-extension': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'no-shadow': 0,
		'import/prefer-default-export': 0,
		'no-nested-ternary': 0
	}
};
