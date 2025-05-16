/// <reference types='cypress' />

Cypress.Commands.add('consultar_pendentes_autorizacao_dieta', () => {
	cy.request({
		method: 'GET',
		url:
			Cypress.config('baseUrl') +
			'api/codae-solicitacoes/pendentes-autorizacao-dieta/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('consultar_autorizados_dieta', () => {
	cy.request({
		method: 'GET',
		url:
			Cypress.config('baseUrl') + 'api/codae-solicitacoes/autorizados-dieta/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('consultar_inativas_dieta', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/codae-solicitacoes/inativas-dieta/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('consultar_negados_dieta', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/codae-solicitacoes/negados-dieta/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('consultar_cancelados_dieta', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/codae-solicitacoes/cancelados-dieta/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('consultar_autorizadas_temporariamente_dieta', () => {
	cy.request({
		method: 'GET',
		url:
			Cypress.config('baseUrl') +
			'api/codae-solicitacoes/autorizadas-temporariamente-dieta/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})
