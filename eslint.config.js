import {lang, strict, esl} from '@exadel/eslint-config-esl';

export default [
  {
    ignores: [
      'jest.config.js',
      'dist/**',
      'modules/**',
      'polyfills/**'
    ]
  },
  ...lang.js,
  ...lang.ts,
  ...strict,
  ...esl.recommended()
];
