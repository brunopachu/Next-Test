const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.mbway.pt",
    setupNodeEvents(on, config) {
      
    },
    env: {

      nif: "503630330",
      email_invalido: "jose@gmail"

    }
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-qase-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
    cypressQaseReporterReporterOptions: {
      debug: true,

      testops: {
        api: {
          token: '4c0335fc0e3d39248516a1b8f44a306cb296c58ab8a263f467bcd428aff755df',
        },

        project: 'MBWEB',
        uploadAttachments: true,

        run: {
          complete: true,
        },
      },

      framework: {
        cypress: {
          screenshotsFolder: 'cypress/screenshots',
        }
      }
    },
  },
});
