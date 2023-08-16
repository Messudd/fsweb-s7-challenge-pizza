describe("Main-Page-Button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("container-component-open-test", () => {
    cy.get(".main_links > :nth-child(1)").click();
    cy.get(".card_container").children().should("have.length", 4);
    cy.get(".main_links > :nth-child(2)").click();
    cy.get(".card_container").children().should("have.length", 3);
    cy.get(".main_links > :nth-child(3)").click();
    cy.get(".card_container").find(">span").should("have.text", "Veri Yoq 😕");
    cy.get(".main_links > :nth-child(4)").click();
    cy.get(".card_container").find(">span").should("have.text", "Veri Yoq 😕");
    cy.get(".main_links > :nth-child(5)").click();
    cy.get(".card_container").find(">span").should("have.text", "Veri Yoq 😕");
    cy.get(".main_links > :nth-child(6)").click();
    cy.get(".card_container").find(">span").should("have.text", "Veri Yoq 😕");
  });
});

// it('checks all checkboxes with one command', () => {
//     cy.get('#check input[type="checkbox"]')
//       .as('checkboxes')
//       .check()

//     cy.get('@checkboxes')
//       .each(checkbox => {
//         expect(checkbox[0].checked).to.equal(true)
//       })
//   })
