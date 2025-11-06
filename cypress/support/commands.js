
Cypress.Commands.add('completarDatosPersonales', (nombre, apellido, telefono, dni) => {
  cy.log('Ingresando nombres, apellidos, celular y dni')
  cy.get('[data-cy="input-nombres"]').clear().type(nombre)
  cy.get('[data-cy="input-apellido"]').clear().type(apellido)
  cy.get('[data-cy="input-telefono"]').clear().type(telefono)
  cy.get('[data-cy="input-dni"]').clear().type(dni)
})


Cypress.Commands.add('seleccionarUbicacion', (provincia, localidad) => {
  cy.log('Seleccionar provincia y localidad')
  cy.get('[data-cy="select-provincia"]').clear().type(provincia)
  cy.get('ul > li > span').contains(provincia).click()
  cy.get('[data-cy="select-localidad"]').clear().type(localidad)
  cy.get('ul > li > span').contains(localidad).click()
})


Cypress.Commands.add('completarFechaNacimiento', (dia, mes, año) => {
  cy.log('Ingresando fecha de nacimiento')
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type(dia)
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type(mes)
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type(año)
})


Cypress.Commands.add('completarEmailYPassword', (email, password) => {
  cy.log('Ingresando mail y confirmación')
  cy.get('[data-cy="input-email"]').clear().type(email)
  cy.get('[data-cy="input-confirmar-email"]').clear().type(email)

  cy.log('Ingresando contraseña y confirmación')
  cy.get('[data-cy="input-password"]').clear().type(password)
  cy.get('[data-cy="input-repetir-password"]').clear().type(password)
})
