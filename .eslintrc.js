module.exports = {
    "extends": "airbnb",

    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"]
            }
        }
    },
    "rules": {
        "indent": [2, 4, { "SwitchCase": 1 }],
        "no-use-before-define": 0,
        "max-len": [2, 120, 4, {
            "ignoreUrls": true,
            "ignoreComments": false
        }],
        "jsx-quotes": [2, "prefer-double"],
        "no-return-assign": 0,
        "arrow-body-style": 0,

        "no-console": [1, { "allow": ["warn", "error"] }],

        "react/no-did-update-set-state": 0,
        "react/no-did-mount-set-state": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-indent-props": [2, 4],
        "react/jsx-indent": [0, 4],
        "react/jsx-max-props-per-line": [2, {"maximum": 3}],
        "react/jsx-no-bind": [2, {
            "ignoreRefs": true
        }],
        "react/prop-types": 0,
        "react/jsx-quotes": 0,
        "react/prefer-stateless-function" : 0,
        "react/sort-comp": [2, {
            "order": [
                "static-methods",
                "lifecycle",
                "/^handle.+$/",
                "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                "everything-else",
                "/^render.+$/",
                "render"
            ]
        }],
    }
}
