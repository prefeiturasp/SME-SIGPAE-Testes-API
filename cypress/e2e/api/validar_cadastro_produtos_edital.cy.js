/// <reference types='cypress' />

describe('Validar rotas de cadastro de produtos edital da aplicação SIGPAE', () => {
	var usuario = Cypress.config('usuario_diretor_ue')
	var senha = Cypress.config('senha')
	before(() => {
		cy.autenticar_login(usuario, senha)
	})

	context('Casos de teste para a rota api/cadastro-produtos-edital/', () => {
		it('Validar GET de produtos edital com sucesso', () => {
			var parametros = ''
			cy.consultar_produtos_edital(parametros).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('count').that.exist
				expect(response.body).to.have.property('next').that.exist
				expect(response.body).to.have.property('previous').that.null
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.not.to.be.empty
				const primeiro_resultado = response.body.results[0]
				expect(primeiro_resultado).to.have.property('uuid').that.exist
				expect(primeiro_resultado).to.have.property('nome').that.exist
				expect(primeiro_resultado).to.have.property('status').that.exist
				expect(primeiro_resultado).to.have.property('criado_em').that.exist
			})
		})

		it('Validar GET de produtos edital por nome', () => {
			var parametros = '?nome=Teste Automação Novo Produto'
			cy.consultar_produtos_edital(parametros).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('count').that.exist
				expect(response.body).to.have.property('next').that.null
				expect(response.body).to.have.property('previous').that.null
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.not.to.be.empty
				const primeiro_resultado = response.body.results[0]
				expect(primeiro_resultado).to.have.property('uuid').that.exist
				expect(primeiro_resultado).to.have.property('nome').that.exist
				expect(primeiro_resultado).to.have.property('status').that.exist
				expect(primeiro_resultado).to.have.property('criado_em').that.exist
			})
		})

		it('Validar GET de produtos edital por nome não existente', () => {
			var parametros = '?nome=Produto não existente'
			cy.consultar_produtos_edital(parametros).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('count').to.eq(0)
				expect(response.body).to.have.property('next').that.null
				expect(response.body).to.have.property('previous').that.null
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.to.be.empty
			})
		})

		it('Validar GET de produtos edital por data de cadastro', () => {
			var parametros = '?data_cadastro=13/03/2025'
			cy.consultar_produtos_edital(parametros).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('count').that.exist
				expect(response.body).to.have.property('next').that.null
				expect(response.body).to.have.property('previous').that.null
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.not.to.be.empty
				const primeiro_resultado = response.body.results[0]
				expect(primeiro_resultado).to.have.property('uuid').that.exist
				expect(primeiro_resultado).to.have.property('nome').that.exist
				expect(primeiro_resultado).to.have.property('status').that.exist
				expect(primeiro_resultado).to.have.property('criado_em').that.exist
			})
		})

		it('Validar GET de produtos edital por data de cadastro inválida', () => {
			var parametros = '?data_cadastro=13/03'
			cy.consultar_produtos_edital(parametros).then((response) => {
				expect(response.status).to.eq(400)
				expect(response.body.data_cadastro[0]).to.eq('Informe uma data válida.')
			})
		})

		it('Validar POST de cadastro produto edital existente', () => {
			var dados_teste = {
				nome: 'Teste Automação',
				ativo: 'True',
				tipo_produto: 'TERCEIRIZADA',
			}
			cy.cadastrar_produto_edital(dados_teste).then((response) => {
				expect(response.status).to.eq(400)
				expect(response.body[0]).to.eq('Item já cadastrado.')
			})
		})

		it('Validar POST de cadastro produto edital com tipo de produto inválido', () => {
			var dados_teste = {
				nome: 'Teste Automação',
				ativo: 'True',
				tipo_produto: 'TERCEIRA',
			}
			cy.cadastrar_produto_edital(dados_teste).then((response) => {
				expect(response.status).to.eq(400)
				expect(response.body.tipo_produto).to.contains(
					'"TERCEIRA" não é um escolha válido.',
				)
			})
		})

		it('Validar POST de cadastro produto edital sem o campo nome', () => {
			var dados_teste = {
				ativo: 'True',
				tipo_produto: 'TERCEIRA',
			}
			cy.cadastrar_produto_edital(dados_teste).then((response) => {
				expect(response.status).to.eq(400)
				expect(response.body.nome).to.contains('Este campo é obrigatório.')
			})
		})

		it('Validar POST de cadastro produto edital com o campo nome em branco', () => {
			var dados_teste = {
				nome: '',
				ativo: 'True',
				tipo_produto: 'TERCEIRA',
			}
			cy.cadastrar_produto_edital(dados_teste).then((response) => {
				expect(response.status).to.eq(400)
				expect(response.body.nome[0]).to.contains(
					'Este campo não pode ser em branco',
				)
			})
		})

		it('Validar POST de cadastro produto edital sem o campo ativo', () => {
			var dados_teste = {
				nome: 'Teste Automação',
				tipo_produto: 'TERCEIRA',
			}
			cy.cadastrar_produto_edital(dados_teste).then((response) => {
				expect(response.status).to.eq(400)
				expect(response.body.ativo).to.contains('Este campo é obrigatório.')
			})
		})

		it('Validar POST de cadastro produto edital com o campo ativo em branco', () => {
			var dados_teste = {
				nome: 'Teste Automação',
				ativo: '',
				tipo_produto: 'TERCEIRA',
			}
			cy.cadastrar_produto_edital(dados_teste).then((response) => {
				expect(response.status).to.eq(400)
				expect(response.body.ativo[0]).to.contains(
					'Este campo não pode ser em branco',
				)
			})
		})

		it('Validar GET de produto com UUID válido com sucesso', () => {
			var uuid = '32e04f4b-7b10-4a73-afbc-d2550c3b1511/'
			cy.validar_produto_edital(uuid).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('uuid').that.exist
				expect(response.body).to.have.property('nome').that.exist
				expect(response.body).to.have.property('status').that.exist
				expect(response.body).to.have.property('criado_em').that.exist
			})
		})

		it('Validar GET de produto com UUID inválido', () => {
			var uuid = 'b2dbaff4-dbd3-45b8-b67c-57ff4b5ad35b/'
			cy.validar_produto_edital(uuid).then((response) => {
				expect(response.status).to.eq(404)
				expect(response.body).to.exist
			})
		})

		it('Validar GET da lista completa de logística com sucesso', () => {
			cy.validar_lista_completa_logistica().then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.not.to.be.empty
				const primeiro_resultado = response.body.results[0]
				expect(primeiro_resultado).to.have.property('uuid').that.exist
				expect(primeiro_resultado).to.have.property('nome').that.exist
				expect(primeiro_resultado).to.have.property('status').that.exist
				expect(primeiro_resultado).to.have.property('criado_em').that.exist
			})
		})

		it('Validar GET da lista de nomes dos produtos com sucesso', () => {
			cy.validar_lista_nomes().then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.not.to.be.empty
			})
		})

		it('Validar GET da lista de nomes dos produtos logística com sucesso', () => {
			cy.validar_lista_nomes_logistica().then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.not.to.be.empty
			})
		})

		it('Validar GET de todos os produtos logística com sucesso', () => {
			cy.validar_produtos_logistica().then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('count').that.exist
				expect(response.body).to.have.property('next').that.exist
				expect(response.body).to.have.property('previous')
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.not.to.be.empty
				const primeiro_resultado = response.body.results[0]
				expect(primeiro_resultado).to.have.property('uuid').that.exist
				expect(primeiro_resultado).to.have.property('nome').that.exist
				expect(primeiro_resultado).to.have.property('criado_em').that.exist
				expect(primeiro_resultado).to.have.property('status').that.exist
			})
		})
	})
})
