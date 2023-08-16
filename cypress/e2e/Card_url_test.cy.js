describe("Card-url-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("cardURL_One - Control", () => {
    cy.get(".main_links > :nth-child(1)").click();
    cy.get(".card_container > :nth-child(2)").find("img").click();
    cy.url().should("include", "/order");
  });
  it("cardURL_Two - Control", () => {
    cy.get(".main_links > :nth-child(2)").click();
    cy.get(".card_container > :nth-child(3)").find("img").click();
    cy.url().should("include", "/order");
  });
});
