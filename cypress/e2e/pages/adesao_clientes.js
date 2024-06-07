/// <reference types="cypress"/>
import { faker, fakerPT_BR, fakerPT_PT } from '@faker-js/faker'

const nif = Cypress.env('nif')

module.exports = {

    fields: {
        
    },
  
    buttons: {      
        apple_button_header: '#slider-23-slide-36-layer-11',
        apple_button_menu: 'img[alt="appstore"]',
        android_button_header: '#slider-23-slide-36-layer-10',
        android_button_menu: 'img[alt="googleplay"]',
        huawei_button_header: '#slider-23-slide-36-layer-8',
        huawei_button_menu: 'img[alt="huaweistore"]',
        
    },
  
    messages:{
          
    },
  
    acessarPaginaAdesaoClientes(){
  
      cy.visit('/aderir-mb-way')
      
    },

    validaApple(){
        
        cy.get(this.buttons.apple_button_menu)
        .parent('a')
        .should('have.attr', 'href')
        .and('include', 'id918126133')

        cy.get(this.buttons.apple_button_header)
        .should('have.attr', 'href')
        .and('include', 'id918126133')

        cy.get(this.buttons.apple_button_header)
        .click()

        cy.contains('App Store')
        .should('have.attr', 'href')
        .and('include', 'id918126133')

        cy.contains('App Store')
        .click()    
        
       
    },

    validaAndroid(){

        cy.get(this.buttons.android_button_menu)
        .parent('a')
        .should('have.attr', 'href')
        .and('include', 'pt.sibs.android.mbway')

        cy.get(this.buttons.android_button_header)
        .should('have.attr', 'href')
        .and('include', 'pt.sibs.android.mbway')

        cy.get(this.buttons.android_button_header)
        .click()

        cy.contains('Play Store')
        .should('have.attr', 'href')
        .and('include', 'pt.sibs.android.mbway')

        cy.contains('Play Store')
        .click()
       
    },

    validaHuawei(){
        cy.get(this.buttons.huawei_button_menu)
        .parent('a')
        .should('have.attr', 'href')
        .and('include', 'EUPTHMS202011MbWAY')

        cy.get(this.buttons.huawei_button_header)
        .should('have.attr', 'href')
        .and('include', 'EUPTHMS202011MbWAY')

        cy.get(this.buttons.huawei_button_header)
        .click()
        
        cy.contains('Huawei AppGallery')
        .should('have.attr', 'href')
        .and('include', 'EUPTHMS202011MbWAY')

        cy.contains('Huawei AppGallery')
        .click()
    },

  
  }