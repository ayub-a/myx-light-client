export default {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-prettier'],
    rules: {
        'prettier/prettier': [
            true,
            {
                tabWidth: 4,
            },
        ],
        'selector-class-pattern': null,
        'no-descending-specificity': null,
        'block-no-empty': true,
        'declaration-block-no-duplicate-properties': true,
        'color-hex-length': 'long',
    },
}
