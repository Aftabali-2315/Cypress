describe("Test", () => {

    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

    it("Demo Test", () => {

        //Launch and Login
        cy.visit("https://v3-lts-eetestsystem.tooljet.com/login/qa-automation?redirectTo=/");
        cy.get('#email').type("test1@tooljet.com");
        cy.get('#password').type("password");
        cy.get("[type='submit']").click();

        //Approach 1
        cy.get("[data-cy='import-dropdown-menu']").click();
        cy.xpath("//a[text()='Choose from template']").click();
        cy.get("[data-cy='ai-powered-code-explainer-list-item']").click();
        cy.get("[data-cy='create-application-from-template-button']").click();
        let randomNum1 = Math.floor(Math.random() * 100);
        cy.get("[data-cy='app-name-input']").clear().type(randomNum1);
        cy.get("[type='submit']").click();
        cy.title().should('includes', `${randomNum1}`);
        cy.xpath("//button[contains(text(),'Skip')]").click();

        cy.go('back');

        //Approach 2
        cy.get("[data-cy='create-new-app-button']").click();
        let randomNum2 = Math.floor(Math.random() * 100);
        cy.get("[data-cy='app-name-input']").clear().type(randomNum2);
        cy.get("[type='submit']").click();
        cy.title().should('includes', `${randomNum2}`);
    })
})