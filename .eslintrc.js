module.exports = {
	root: true,
	env: {
		node: true,
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard',
	],
	// 0: off
	// 1: warning
	// 2: error
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,

		'no-tabs': 0,
		'indent': [2, 'tab', { SwitchCase: 1 }],
		'comma-dangle': [1, 'always-multiline'],
		'semi': [1, 'always'],
		'space-before-function-paren': [1, 'never'],
		'vue/html-indent': [1, 'tab'],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
