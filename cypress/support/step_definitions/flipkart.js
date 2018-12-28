const url = 'http://www.flipkart.com'

given('I open Flipkart page', () => {
  cy.visit(url)
  cy.get('div.Km0IJL.col.col-3-5 > div > form > div:nth-child(1) > input').type('{esc}')
})

//given('Enter username and password', () => {
//	cy.get('div.Km0IJL.col.col-3-5 > div > form > div:nth-child(1) > input').type('shivamasawa96@gmail.com')
//	cy.get('div.Km0IJL.col.col-3-5 > div > form > div:nth-child(2) > input').type('asawa61096').type('{enter}', {timeout: 5000})
//	cy.wait(5000)
//})

//then('I see site logged in', () => {
//	cy.get('div._1Wr4v5 > div:nth-child(1) > div > div > div', {timeout: 5000}).should('be.visible')
//})

given('Click on 24*7 Care and click on order category', () =>{
	cy.get('._1Wr4v5 > div:nth-child(2)').trigger('mouseover')
	cy.get('._3yG-R_ > div > ul > li:nth-child(2)').click()
	cy.contains('Order').click()
	cy.contains('View More').click()
//	cy.get('._1GRhLX._3PF7V3>div:nth-child(2)>div>div').should('have.length', 28)
})

then('I see total {string} questions related to order', (total) => {
	cy.get('._1GRhLX._3PF7V3>div:nth-child(2)>div>div').should('have.length', total)
})

given('Select Mac in Mobile Electronics', () => {
	cy.get('.zi6sUf._3Ed3Ub >ul>li:nth-child(1)').trigger('mouseover')
	cy.contains('Apple').click()
	cy.get('.EstLIe>div>div:nth-child(3)').click()
})