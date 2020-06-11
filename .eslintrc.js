module.exports = {
		'env': {
        'es2020': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'indent': [
            'tab'
        ],
        'linebreak-style': [
            'windows'
        ],
        'quotes': [
            'single'
        ],
        'semi': [
            'always'
        ]
    }
};