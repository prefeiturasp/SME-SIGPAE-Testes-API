const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			require('./cypress/plugin/index.js')(on, config)
			return config
		},
		baseApiUrl: 'https://hom-sigpae.sme.prefeitura.sp.gov.br/',
		usuario_coordenador_logistica: '07206148808',
		usuario_coordenador_codae_dilog_logistica: '53666852220',
		senha: 'adminadmin',
		video: false,
		videoCompression: 0,
		retries: 3,
		screenshotOnRunFailure: true,
		chromeWebSecurity: false,
		experimentalRunAllSpecs: true,
		failOnStatusCode: false,
		specPattern: 'cypress/e2e/**/**/*.{feature,cy.{js,jsx,ts,tsx}}',
	},
})
