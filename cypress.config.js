const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,  // відключити файл підтримки
    setupNodeEvents(on, config) {
      // node event listeners
    },
  },
});
