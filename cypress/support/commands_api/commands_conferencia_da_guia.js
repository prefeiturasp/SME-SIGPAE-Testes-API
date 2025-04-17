/// <reference types='cypress' />

Cypress.Commands.add('consultar_conferencia_da_guia', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/conferencia-da-guia/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('consultar_por_id_conferencia_da_guia', (uuid) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + `api/conferencia-da-guia/${uuid}`,
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})
