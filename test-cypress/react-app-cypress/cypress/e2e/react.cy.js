context("按钮测试区域", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("模拟点击button 测试", () => {
    // https://on.cypress.io/type
    cy.get("button").click();
    cy.get("button").should("have.attr", "disabled");
    cy.wait(2000);
    cy.get("button", { timeout: 0 }).should("not.have.attr", "disabled");
  });
});
