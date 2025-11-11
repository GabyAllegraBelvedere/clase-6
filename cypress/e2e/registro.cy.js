
describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.wait(2000)
  })

  // Test 1
  it('Completa todos los campos y presiona Registrar', () => {
    cy.completarDatosPersonales('Olivia', 'Ocampo', '1123242527', '23075787')
    cy.seleccionarUbicacion('Buenos Aires', 'Morón')
    cy.completarFechaNacimiento('28', '12', '1995')
    cy.completarEmailYPassword('olivia@gmail.com', 'P@ssw0rd123')

    cy.log('Enviar formulario')
    cy.get('[data-cy="btn-registrarse"]').click().wait(2000)

   
    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
  })

  // Test 2
  it('Muestra error cuando el email ya está registrado', () => {
    cy.completarDatosPersonales('Adriana', 'Allegra', '1133343235', '36789852')
    cy.seleccionarUbicacion('Buenos Aires', 'Morón')
    cy.completarFechaNacimiento('17', '12', '1997')
    cy.completarEmailYPassword('olivia28@gmail.com', 'P@ssw0rd123')

    cy.log('Email duplicado')
    cy.get('[data-cy="btn-registrarse"]').click()

    cy.contains('email').should('be.visible')
  })

  // Test 3
  
it('Registra un nuevo usuario con datos aleatorios', () => {
  const timestamp = Date.now() 
  const nombre = `Test${timestamp}`
  const apellido = `User${timestamp}`
  const email = `usuario${timestamp}@gmail.com`
  const telefono = `11${Math.floor(10000000 + Math.random() * 90000000)}` 
  const dni = `${30000000 + Math.floor(Math.random() * 10000)}`

  cy.completarDatosPersonales(nombre, apellido, telefono, dni)
  cy.seleccionarUbicacion('Córdoba', 'Córdoba')
  cy.completarFechaNacimiento('10', '10', '1990')
  cy.completarEmailYPassword(email, 'P@ssw0rd123')

  cy.log(`Registrando usuario con email: ${email}`)
  cy.get('[data-cy="btn-registrarse"]').click().wait(2000)

  
  cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
})


  // Test 4
  it('Registrar otro usuario y validar redirección', () => {
    cy.completarDatosPersonales('Olivia', 'Ocampo', '1123242523', '23075785')
    cy.seleccionarUbicacion('Buenos Aires', 'Morón')
    cy.completarFechaNacimiento('28', '12', '1995')
    cy.completarEmailYPassword('olivia12@gmail.com', 'P@ssw0rd123')

    cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
  })

  // Test 5
  it('Muestra error cuando la contraseña no cumple requisitos', () => {
    cy.completarDatosPersonales('Martina', 'Cejas', '1123256452', '23236459')
    cy.seleccionarUbicacion('Buenos Aires', 'La Plata')
    cy.completarFechaNacimiento('01', '01', '1990')
    cy.completarEmailYPassword('martinacejas@gmail.com', '12345') 

    cy.log('Contraseña inválida')
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.contains('contraseña').should('be.visible')
  })
})
