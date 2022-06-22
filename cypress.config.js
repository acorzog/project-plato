const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://very-important.vercel.app/',
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 30000,
  },
});
