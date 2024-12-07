describe('Progect is runing successfully', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  
  it('visits the Home page', () => {
    cy.contains('.title', 'things')
  })

  it('Checking the Task as the "DONE"', () => {
    cy.get('.row__text').first()
      .should('not.have.class', 'row__text_done')
    cy.get('.row__text').first()
      .click()
    cy.get('.row__text').first()
      .should('have.class', 'row__text_done')
  })

  it('Creating the new Task', () => {
    cy.get('.new-task > input')
      .click()
      .clear()
      .type('ADT')

    cy.get('.new-task__btn')
      .click()

    cy.contains('.list', 'ADT')
  })

  it('Creating the new Task with the empty input, the Alert appire', () => {
    cy.get('.home-wrapper')
      .should('not.contain', 'Please enter Task')
  
    cy.get('.new-task > input')
      .click()
      .clear()

    cy.get('.new-task__btn')
    .click()

    cy.contains('.home-wrapper', 'Please enter Task')
  })

  it('Delete the Task', () => {
    cy.get('.list__row')
      .first()
      .contains('.row__text', 'Greate job!')

    cy.get('.list__row > .row__btn')
    .first()
    .click()

    cy.get('.list')
    .should('not.contain', 'Greate job!')
  })
})







