import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    video: false,
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    video: false,
    specPattern: '**/*.cy.ts'
  }
})
