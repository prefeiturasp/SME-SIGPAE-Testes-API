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

Cypress.Commands.add('validar_dados_cronograma_ficha_recebimento', (uuid) => {
	cy.request({
		method: 'GET',
		url:
			Cypress.config('baseUrl') +
			`api/cronogramas/${uuid}/dados-cronograma-ficha-recebimento/`,
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_detalhar_com_log', (uuid) => {
	cy.request({
		method: 'GET',
		url:
			Cypress.config('baseUrl') + `api/cronogramas/${uuid}/detalhar-com-log/`,
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_dashboard', (uuid) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/cronogramas/dashboard/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_dashboard_com_filtro', (filtro) => {
	cy.request({
		method: 'GET',
		url:
			Cypress.config('baseUrl') +
			`api/cronogramas/dashboard-com-filtro/${filtro}`,
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_lista_cronogramas_cadastro', () => {
	cy.request({
		method: 'GET',
		url:
			Cypress.config('baseUrl') + 'api/cronogramas/lista-cronogramas-cadastro/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_lista_cronogramas_ficha_recebimento', () => {
	cy.request({
		method: 'GET',
		url:
			Cypress.config('baseUrl') +
			'api/cronogramas/lista-cronogramas-ficha-recebimento/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_listagem_relatorio', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/cronogramas/listagem-relatorio/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_opcoes_etapas', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/cronogramas/opcoes-etapas/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_rascunhos', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/cronogramas/rascunhos/',
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})
