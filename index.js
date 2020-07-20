module.exports = {
    'env': {
        'node': true,
        'es2020': true,
        'mocha': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module',
    },
    'rules': {
        indent: [ 1, 4, { SwitchCase: 1 } ],
        quotes: [ 'warn', 'single' ],
        semi: [ 'warn', 'always' ],
        'semi-spacing': [ 'warn', { 'before': true, 'after': true } ],
        'comma-spacing': [ 'warn', { 'before': false, 'after': true } ],
        'space-infix-ops': 2,
        'space-in-parens': [ 1, 'always', { 'exceptions': [ 'empty' ] } ],
        'array-bracket-spacing': [ 'warn', 'always' ],
        'object-curly-spacing': [ 'warn', 'always' ],
        'block-spacing': 'warn',
        'arrow-spacing': 'warn',
        'space-before-function-paren': 'warn',
        'keyword-spacing': [ 'warn', { 'before': true } ],
        'linebreak-style': [ 'error', 'unix' ],
        'no-underscore-dangle': [ 'error', { allow: [ '_id' ] } ],
    }
} ;
