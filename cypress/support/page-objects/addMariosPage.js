export class AddMariosPage {

  chooseReceiver() {
    cy.get('.receivers > .mat-mdc-form-field').click()
    cy.get('.mat-mdc-option > .mdc-list-item__primary-text').eq(0).invoke('text').as('received')
    cy.get('.mat-mdc-option > .mdc-list-item__primary-text').eq(0).click()
  }

  chooseMariosType() {
    cy.get('.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary').eq(0).click()
  }


  setTitle(title) {
    cy.get('[formcontrolname="title"]').type(title)
  }

  setComment(comment) {
    cy.get('[formcontrolname="comment"]').type(comment)
  }

  clickSend() {
    cy.get('.send-button-component').click()
  }

  clickBack() {
    cy.get('.back-button-component').click()
  }

}

export const onAddMariosPage = new AddMariosPage()
