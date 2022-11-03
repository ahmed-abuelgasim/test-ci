describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running!')
    cy.viewport(1000, 860)
    cy.matchImageSnapshot();
  })
})
