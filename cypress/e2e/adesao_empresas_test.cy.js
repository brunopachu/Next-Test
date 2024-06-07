/// <reference types="cypress"/>
import Empresas from "./pages/adesao_empresas"
import { qase } from "cypress-qase-reporter/mocha";

describe('Valida o formulário de adesão de novas empresas do site MBWay', () => {

  beforeEach(() => {
    cy.ignoreXHR()
    Empresas.acessarPaginaAdesaoEmpresas()

  });

  qase(1,
  it('Valida se o usuário consegue fazer o registo para adesão com sucesso', () => {
    Empresas.formularioDadosValidos()
    Empresas.validaMensagemRecaptcha() // a validação precisa ser feita na mensagem de Recaptcha devido ao site estar em produção
  })
)

  qase (2,
  it('Valida que não é possível enviar o formulário com o email inválido', () => {
    Empresas.formularioEmailInvalido()
    Empresas.validaMensagemErro()
})
  )

  qase(3,
it('Valida que não é possível enviar o formulário com o telefone inválido', () => {
  Empresas.formularioTelefoneInvalido()
  Empresas.validaMensagemErro()
})
  )

  qase(4,
it('Valida que não é possível enviar o formulário com o NIF inválido', () => {
  Empresas.formularioNifInvalido()
  Empresas.validaMensagemErro()
})
  )
})