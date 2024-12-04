/// <reference types='cypress' />

Cypress.Commands.add('autenticar_login', (usuario, senha) => {
	cy.request({
		method: 'POST',
		url: Cypress.config('baseApiUrl') + 'api/login/',
		body: {
			login: usuario,
			password: senha,
		},
	}).then((responseUserToken) => {
		globalThis.token =
			responseUserToken.allRequestResponses[0]['Response Body'].access
	})
})
