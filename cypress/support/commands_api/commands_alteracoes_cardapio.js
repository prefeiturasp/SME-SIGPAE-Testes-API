/// <reference types='cypress' />

Cypress.Commands.add('validar_alteracoes_cardapio', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/alteracoes-cardapio/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})
