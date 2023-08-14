/// <reference types="cypress" />

import {onHomePage} from "../support/page-objects/homePage";
import {onAddMariosPage} from "../support/page-objects/addMariosPage";
import {onDisplayMariosPage} from "../support/page-objects/displayMariosPage";

describe('Add marios Test', () => {

  let title = "Title";
  let comment = "Comment";

  it('Add marios', () => {
    cy.visit('/')

    onHomePage.clickAddMarios()

    onAddMariosPage.chooseReceiver()
    onAddMariosPage.chooseMariosType()
    onAddMariosPage.setTitle(title)
    onAddMariosPage.setComment(comment)

    onAddMariosPage.clickSend()

    onAddMariosPage.clickBack()

    onHomePage.checkMariosTitle(title)
    onHomePage.checkMariosComment(comment)

    onHomePage.clickMariosTile()
    onHomePage.checkTitleOnPopUp(title)
    onHomePage.checkCommentOnPopUp(comment)
    onHomePage.clickClosePopUp()

    onHomePage.clickSentMarios()

    onDisplayMariosPage.checkMariosTitle(title)
    onDisplayMariosPage.checkMariosComment(comment)

    onDisplayMariosPage.clickMariosTile()
    onDisplayMariosPage.checkTitleOnPopUp(title)
    onDisplayMariosPage.checkCommentOnPopUp(comment)
  })
})
