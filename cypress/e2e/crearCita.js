describe('crear citas', () => {
    it("crea una cita y la lista en la landing page", () => {
        cy.visit('/')
          .get('.btn')
          .click()
          
          .get('#nombre')
          .type('Camila08-Prueba')

          .get('#propietario')
          .type('Aguado')

          .get('#telefono')
          .type('722256737')

          .get('#fecha')
          .type('1987-09-26')

          .get('#hora')
          .type('16:45')

          .get('#sintomas')
          .type('Diarrea cronica')

          .get('#crear-cita')
          .click()
    
    });
})
