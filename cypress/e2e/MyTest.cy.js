// cypress/support/commands.js
import 'cypress-file-upload';

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

    it.only("Import and Export", () => {
        //Launch and Login
        cy.visit("https://v3-lts-eetestsystem.tooljet.com/login/qa-automation?redirectTo=/");
        cy.get('#email').type("test1@tooljet.com");
        cy.get('#password').type("password");
        cy.get("[type='submit']").click();

        cy.get("[data-cy='import-dropdown-menu']").click();
        cy.get("[data-cy='import-option-label']").click(); // Opens file upload modal

        cy.get('input[type="file"]').attachFile('tooljet12-export-1754928455017.json'); // Uploads the file

        cy.get("[data-cy='app-name-input']").clear().type("test21");
        cy.get("[data-cy='import-app']").click();

        cy.wait(2000);
        cy.xpath("//button[contains(text(),'Skip')]").click();

        cy.get("[data-cy='app-name-input']").clear().type("testing1");
        cy.get("[data-cy='label-select-datasource']").click();

        cy.go('back');
        
        cy.get("[data-cy='testing1-card']")
        .first()
        .trigger('mouseover')
        .find("[data-cy='app-card-menu-icon']")
        .click({ force: true });

        cy.get("[data-cy='delete-app-card-option']").click();
        cy.get("[data-cy='yes-button']").click();

    });
})