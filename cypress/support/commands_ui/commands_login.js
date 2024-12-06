import Login_SME_Localizadores from '../locators/login_locators'

const login_SME_Localizadores = new Login_SME_Localizadores

Cypress.Commands.add('login_sme', (device) => {
	cy.configurar_visualizacao(device)
	cy.visit('/')
})

Cypress.Commands.add('dados_de_login', (usuario, senha) => {
	usuario ? cy.get(login_SME_Localizadores.campo_usuario()).type(usuario) : ''
	senha ? cy.get(login_SME_Localizadores.campo_senha()).type(senha) : ''
})

Cypress.Commands.add('clicar_botao', () => {
	cy.get(login_SME_Localizadores.botao_acessar())
		.should('be.visible')
		.click()
})

Cypress.Commands.add('validar_mensagem', (mensagem) => {
	cy.get(login_SME_Localizadores.mensagem())
		.should('be.visible')
		.and('contain', mensagem)
})