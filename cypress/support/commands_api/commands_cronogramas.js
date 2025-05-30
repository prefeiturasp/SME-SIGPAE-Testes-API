/// <reference types='cypress' />

Cypress.Commands.add('validar_cronogramas', (parametros) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + `api/cronogramas/${parametros}`,
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})
