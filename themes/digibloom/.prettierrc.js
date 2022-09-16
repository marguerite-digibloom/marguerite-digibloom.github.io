module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  proseWrap: 'preserve',
  endOfLine: 'auto',
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'ignore',

  plugins: [require.resolve('prettier-plugin-tailwindcss'), require.resolve('prettier-plugin-go-template')],

  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
      },
    },
  ],
};
