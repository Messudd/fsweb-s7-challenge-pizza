describe("form-validation-testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/order");
  });

  it("validate-form", () => {
    cy.get('[data-cy="order-cy"]').click({ force: true });
    cy.get("form > .choise > :nth-child(3)")
      .find('[type="checkbox"]')
      .check({ force: true });
    cy.get(".choise > p").should(
      "have.text",
      "Daha az malzeme seciniz ( Max 10 ) !"
    );
    cy.get('[data-cy="name-area"]').type("Mes", { force: true });
    cy.get('.form-bottom > [style="color: rgb(206, 40, 41);"]').should(
      "have.text",
      "İsim en az 5 karakter olmalı !"
    );
    cy.get('[data-cy="note-area"]').type(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam officiis accusamus repellendus adipisci itaque soluta harum rerum dolores praesentium minus, mollitia dolor quidem maxime, possimus atque tempore modi nostrum cum sint numquam. Vel nemo saepe consequuntur eveniet fugit inventore. Laboriosam odit tenetur possimus odio, autem vero dolorem distinctio qui quidem quam inventore eos aut porro neque modi iure quibusdam libero.",
      {force:true}
    );
    cy.get('.form-bottom > h3[style="color: rgb(206, 40, 41);"]').should('have.text','Max 50 Karakter Giriniz !');
  });
});
