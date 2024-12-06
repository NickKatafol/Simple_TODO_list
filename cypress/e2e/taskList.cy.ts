describe('Progect is runing successfully', () => {
  it('visits the Home page', () => {
    cy.visit('/')
    cy.get('.title').contains('.title', 'THINGS TO DO')
  })

  it('The initial data is rendered successfully', () => {
    cy.visit('/')
    cy.contains('.row__text', 'Greate job!')
  })
})







