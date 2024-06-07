/// <reference types="cypress"/>
import Clientes from "./pages/adesao_clientes"
import { qase } from "cypress-qase-reporter/mocha";

describe('Valida se o usuário consegue aceder as lojas de aplicações na página de adesão de clientes', () => {

  beforeEach(() => {
    cy.ignoreXHR()
    Clientes.acessarPaginaAdesaoClientes()
  });

  qase(5,
  it('Valida se o usuário consegue acessar a loja da Apple para download da aplicação utilizando todos os links disponíveis na página', () => {
    Clientes.validaApple()
  })
)

qase(6,
  it('Valida se o usuário consegue acessar a loja do Google para download da aplicação utilizando todos os links disponíveis na página', () => {
    Clientes.validaAndroid()
})
)

qase(7,
it('Valida se o usuário consegue acessar a loja da Huawei para download da aplicação', () => {
  Clientes.validaHuawei()
})
)
})