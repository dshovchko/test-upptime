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
  {
    files: ['**/*.ts', '**/*.tsx'],
    linterOptions: {
      reportUnusedDisableDirectives: 'warn'
    }
  },
  ...lang.js,
  ...lang.ts,
  ...strict,
  ...esl.recommended()
];
