export class HomePage {

  clickAddMarios() {

    cy.get('.add-marios-button-component').contains("ADD MARIOS").click()

  }

  checkMariosTitle(title) {
    cy.get('.marios-title-text').eq(0).should('have.text', title)
  }

  checkMariosComment(comment) {
    cy.get('.marios-comment-text').eq(0).should('have.text', " " + comment + "... See more")
  }

  clickMariosTile() {
    cy.get('.mat-grid-tile-content').eq(0).click()
  }

  checkTitleOnPopUp(title) {
    cy.get('.marios-title-pop-up > p').should('have.text', title)
  }

  checkCommentOnPopUp(comment) {
    cy.get('.marios-comment-text-pop-up').should('have.text', ' ' + comment + ' ')
  }

  clickClosePopUp() {
    cy.get('.close-button').click()
  }

  clickSentMarios() {
    cy.get('.marios-button').eq(1).click()
  }

}

export const onHomePage = new HomePage()
