describe("form-verification-testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("start-form", () => {
    cy.get(".main_links > :nth-child(2)").click();
    cy.get(".card_container > :nth-child(2)").click();
    cy.get('[data-cy="order-cy"]').click({ force: true });
    cy.get(".radio-div > :nth-child(1)").click({ force: true });
    cy.get("select").select("Normal-Hamur", { force: true });
    cy.get("form > .choise > :nth-child(3)")
      .find('[type="checkbox"]')
      .first()
      .check({ force: true });
    cy.get("form > .choise > :nth-child(3)")
      .find('[type="checkbox"]')
      .last()
      .check({ force: true });
    cy.get("[data-cy=name-area]").type("Mesud", { force: true });
    cy.get("[data-cy=note-area]").type("Lütfen Acillll", { force: true });
    cy.get("[data-cy=up-counter]").click({ force: true });
    cy.get("[data-cy=order-begin]").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/order/onay");
  });
});
