/// <reference types="cypress"/>
import { faker, fakerPT_BR, fakerPT_PT } from '@faker-js/faker'

const nif = Cypress.env('nif')

module.exports = {

    fields: {
  
        field_name: '[data-field-id="field1"]',
        field_email: '[data-field-id="field2"]',
        field_phone: '[data-field-id="field6"]',
        field_nif: '[data-field-id="field7"]',
        field_solution: '[data-field-id="field3"]',
        field_bank: '[data-field-id="field4"]'

    },
  
    buttons: {
      
      send_button: '.submit-button'
    
        
    },
  
    messages:{
        sucess_message: '.final-success',
        error_email: '.error',
        recaptcha_message: '.has-error'
  
    },
  
    acessarPaginaAdesaoEmpresas(){
  
      cy.visit('/adesao-empresas')
      
    },

    formularioDadosValidos(){

        cy.get(this.fields.field_name)
        .clear()
        .type(fakerPT_BR.string.alpha(15))

        cy.get(this.fields.field_email)
        .clear()
        .type(fakerPT_BR.internet.email())

        cy.get(this.fields.field_phone)
        .clear()
        .type(faker.helpers.fromRegExp('9{1}1{1}[0-9]{7}'))

        cy.get(this.fields.field_nif)
        .clear()
        .type(Cypress.env('nif'))

        cy.get(this.fields.field_solution)
        .select('Aceitar pagamentos em loja física')

        cy.get(this.fields.field_solution)
        .should('have.value', 'Aceitar pagamentos em loja física')

        cy.get(this.fields.field_bank)
        .select('Não tenho banco preferencial')

        cy.get(this.fields.field_bank)
        .should('have.value', 'Não tenho banco preferencial')

        cy.get(this.buttons.send_button)
        .click()

    },

    formularioEmailInvalido() {
        cy.get(this.fields.field_name)
        .clear()
        .type(fakerPT_BR.person.fullName())
        cy.get(this.fields.field_email)
        .clear()
        .type(Cypress.env('email_invalido'))
        cy.get(this.fields.field_phone).clear()
        .type(faker.helpers.fromRegExp('9{1}1{1}[0-9]{7}'))
        cy.get(this.fields.field_nif)
        .clear()
        .type(Cypress.env('nif'))
        cy.get(this.fields.field_solution)
        .select('Aceitar pagamentos em loja física')
        cy.get(this.fields.field_solution)
        .should('have.value', 'Aceitar pagamentos em loja física')
        cy.get(this.fields.field_bank)
        .select('Não tenho banco preferencial')
        cy.get(this.fields.field_bank)
        .should('have.value', 'Não tenho banco preferencial')
        cy.get(this.buttons.send_button)
        .click()
    },

    formularioTelefoneInvalido() {
        cy.get(this.fields.field_name)
        .clear()
        .type(fakerPT_BR.string.alpha(15))

        cy.get(this.fields.field_email)
        .clear()
        .type(fakerPT_BR.internet.email())

        cy.get(this.fields.field_phone)
        .clear()
        .type(faker.helpers.fromRegExp('9{1}1{1}[0-9]{15}'))

        cy.get(this.fields.field_nif)
        .clear()
        .type(Cypress.env('nif'))

        cy.get(this.fields.field_solution)
        .select('Aceitar pagamentos em loja física')

        cy.get(this.fields.field_solution)
        .should('have.value', 'Aceitar pagamentos em loja física')

        cy.get(this.fields.field_bank)
        .select('Não tenho banco preferencial') 

        cy.get(this.fields.field_bank)
        .should('have.value', 'Não tenho banco preferencial')

        cy.get(this.buttons.send_button)
        .click()
    },

    formularioNifInvalido() {
        cy.get(this.fields.field_name)
        .clear()
        .type(fakerPT_BR.string.alpha(15))

        cy.get(this.fields.field_email)
        .clear()
        .type(fakerPT_BR.internet.email())

        cy.get(this.fields.field_phone)
        .clear()
        .type(faker.helpers.fromRegExp('9{1}1{1}[0-9]{7}'))

        cy.get(this.fields.field_nif)
        .clear()
        .type(fakerPT_BR.helpers.fromRegExp('8{1}1{1}[0-9]{6}')) 

        cy.get(this.fields.field_solution)
        .select('Aceitar pagamentos em loja física')

        cy.get(this.fields.field_solution)
        .should('have.value', 'Aceitar pagamentos em loja física')

        cy.get(this.fields.field_bank)
        .select('Não tenho banco preferencial')

        cy.get(this.fields.field_bank)
        .should('have.value', 'Não tenho banco preferencial')
        
    },

    validaMensagemSucesso(){

        cy.get(this.messages.sucess_message).should('be.visible')

    },

    validaMensagemErro() {

        cy.get(this.messages.error_email).should('be.visible')

    },

    validaMensagemRecaptcha() {
        cy.get(this.messages.recaptcha_message).should('be.visible')
    }

  
  }