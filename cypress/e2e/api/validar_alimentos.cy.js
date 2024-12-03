/// <reference types="cypress" />

describe("Validar rotas de alimentos da aplicação SIGPAE", () => {
	var usuario = Cypress.config("usuario")
	var senha = Cypress.config("senha")
	before(() => {
		cy.autenticar_login(usuario, senha)
	})

	context("Casos de teste para as rotas de aalimentos", () => {
		it("Validar GET de todos todos os alimentos do tipo Edital com sucesso", () => {
			var id = "?tipo=E"
			cy.validar_alimentos(id).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.be.an("array").and.not.to.be.empty;
				const lista = response.body[0];
				expect(lista.ativo, "O alimento deve estar ativo").to.be.true;
				expect(lista).to.have.property("id").that.is.a("number");
				expect(lista).to.have.property("nome").that.is.a("string");
				expect(lista).to.have.property("outras_informacoes").that.is.a("string");
				expect(lista).to.have.property("tipo_listagem_protocolo").that.equals("SO_ALIMENTOS");
				expect(lista).to.have.property("uuid").that.is.a("string").and.have.length.greaterThan(0);
				expect(lista.nome).to.eq("ABACATE");
			})
		})
	})
})