import { defineConfig } from 'cypress'

import {
  addMatchImageSnapshotPlugin,
// @ts-ignore
} from '@simonsmith/cypress-image-snapshot/plugin';

export default defineConfig({
  e2e: {
    'baseUrl': 'http://localhost:4200',
    screenshotOnRunFailure: false,
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    screenshotOnRunFailure: false,
    video: false,
    specPattern: '**/*.cy.ts'
  }
})
