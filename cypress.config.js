import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'n6jejv',
    e2e: {
    setupNodeEvents(on, config) {
      // Node-side setup
    },
    baseUrl: 'https://example.com/',
    specPattern: 'cypress/e2e/*.cy.js',
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    video: false,
  },
});
