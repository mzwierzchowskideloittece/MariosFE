export class DisplayMariosPage {

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

}

export const onDisplayMariosPage = new DisplayMariosPage()
