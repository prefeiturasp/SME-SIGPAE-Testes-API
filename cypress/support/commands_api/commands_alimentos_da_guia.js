/// <reference types='cypress' />

Cypress.Commands.add('validar_alimentos_da_guia', (id) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseApiUrl') + `api/alimentos-da-guia/${id}`,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})
