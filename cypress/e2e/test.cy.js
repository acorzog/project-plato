import {
  PageArticle,
  PageFooter,
  PageNavigation,
  PageSideBar
} from '../selectors/projectSocrates';

const pageTitle = 'Project Socrates';
const pageSubTitle = 'Employee management system documentation';

describe('Automated tests — documentation site', () => {
  before(() => {
    cy.visit('/');
  });
  it('validate components in the homepage', () => {
    loadNavigation();
    loadSideBar();
    loadContent();
    loadFooter('Didcomm');
  });

  it('Go around through the pages (Next - Previous)', () => {
    loadContent();
    cy.get(PageSideBar.list(1)).should('have.class', 'active');
    cy.get(PageFooter.pagination('Didcomm')).should('be.visible').click();
    cy.url('/didcomm');
    cy.get(PageSideBar.list(2)).should('have.class', 'active');
    cy.get(PageFooter.pagination('Introduction')).should('be.visible');
    cy.get(PageFooter.pagination('Self Sovereign Identity'))
      .should('be.visible')
      .click();
    cy.url('/self%20sovereign%20identity');
    cy.get(PageSideBar.list(3)).should('have.class', 'active');
    cy.get(PageFooter.pagination('')).should('not.exist');
  });

  it('Search SSI around the site and get to the Self-sovereign identity page', () => {
    const expectedResult = {
      title: 'Self-sovereign identity (SSI)'
    };

    cy.get(PageNavigation.searchBox)
      .scrollIntoView()
      .should('be.visible')
      .type('SSI{enter}', { delay: 30 })
      .then(() => {
        cy.url('/self%20sovereign%20identity');
        cy.get(PageSideBar.list(3)).should('have.class', 'active');
      });
    cy.get(PageArticle.title)
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text).to.be.eq(expectedResult.title);
      });
  });

  it('Should activate Dark Mode and be able to return to Light Mode', () => {
    const backgroundColor = {
      white: 'rgb(255, 255, 255)',
      black: 'rgb(17, 17, 17)'
    };
    const textColor = {
      white: 'rgb(247, 250, 252)',
      black: 'rgb(0, 0, 0)'
    };

    cy.get('body').should(
      'have.css',
      'background-color',
      backgroundColor.white
    );
    cy.get(PageNavigation.title).should('have.css', 'color', textColor.black);
    cy.get(PageArticle.title).should('have.css', 'color', textColor.black);
    cy.get(PageArticle.contentText).should(
      'have.css',
      'color',
      textColor.black
    );
    cy.get(PageNavigation.viewMode).click();
    cy.get('body').should(
      'have.css',
      'background-color',
      backgroundColor.black
    );
    cy.get(PageNavigation.title).should('have.css', 'color', textColor.white);
    cy.get(PageArticle.title).should('have.css', 'color', textColor.white);
    cy.get(PageArticle.contentText).should(
      'have.css',
      'color',
      textColor.white
    );
  });
});

function loadNavigation() {
  cy.get(PageNavigation.wrapper)
    .should('be.visible')
    .within(() => {
      cy.get(PageNavigation.title)
        .should('be.visible')
        .and('contain', pageTitle);
      cy.get(PageNavigation.subTitle)
        .should('be.visible')
        .and('contain', pageSubTitle);
      cy.get(PageNavigation.searchBox).should('be.visible');
    });
}
function loadSideBar() {
  cy.get(PageSideBar.contentList).its('length').should('eq', 3);
}
function loadContent() {
  cy.get(PageArticle.docContainer).should('be.visible');
  cy.get(PageArticle.title).should('be.visible');
  cy.get(PageArticle.contentText).should('be.visible');
}
function loadFooter(page) {
  cy.get(PageFooter.pagination(page))
    .should('be.visible')
    .and('have.attr', 'href');
  cy.get(PageFooter.footerCopyright)
    .scrollIntoView()
    .should('be.visible')
    .and('contain', '2022 © Project Socrates.');
  cy.get(PageFooter.editPage)
    .should('include.text', 'Edit this page')
    .and('have.attr', 'href');
}
