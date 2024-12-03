export default [
    {
      files: ["**/**/*.js"],
      ignores: [
        "node_modules/",
        "cypress/videos/",
        "cypress/screenshots/"
      ],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        globals: {
          Cypress: "readonly",
          cy: "readonly",
          expect: "readonly",
          assert: "readonly",
        }
      },
      plugins: {},
      rules: {}
    }
  ];