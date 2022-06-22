# project-plato

## Prerequisites

### Operating System
Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above (64-bit only)

### Node.js

Node.js 12 or 14 and above

______________________________________________________________________________________________________

## Clone the repository
Go to your terminal and clone this repo in your local machine with:

```sh
git clone https://github.com/acorzog/project-plato
```
______________________________________________________________________________________________________

## Install instructions

1. Install the project dependencies:

    Run
    ```bash
    npm install
    ```
    _This will take some time, go for a coffee_

______________________________________________________________________________________________________

## How to run

To run tests with the open UI
  - Run
    ```
    npm run cy:open
    ```
    - Then select "E2E Testing" option 
    - Select the browser you want to use (Suggested ELECTRON) 
    - Click on the "Start E2E Testing in Electron"

To run tests headless
  - Run
    ```
    npm run cy:run
    ```  
______________________________________________________________________________________________________
______________________________________________________________________________________________________

# 1. __Automated tests — documentation site__
   ## Bugs found and questions

1. __Bugs:__
    - The page, in general, is built over an HTML markup, this makes it difficult to get information without you setting it manually for the tests. It would b really helpful to have an API or any kind of request to make calls and get that response to compare it to what is displayed.
    - Light/Dark mode icon doesn't load very time the page is loaded, so it flacks when trying to get that element and is not visible.
    - Locators/selectors in the page are not well identified, this makes really difficult to grab properly and element as don't have proper ID, Class, Type or data-tn to test over them.
    - Search only works with Title, you are not able to look subtitles, or any other reference of the page.
    - Last page "Self-sovereign identity (SSI)" doesn't have pagination or a way to gt back to the previous page.
    - The placeholder of the searchbox is not clear for the user.

2. __Questions:__
    - How relevant is it for the user to have an "Edit this page" on the site if its an option only available for the owners
    - If the plan is to grow to hundreds of pages, what will be the approach to manage the content? Would be included some kind of request to an endpoint or CMS implementation to maintain the page easily?

# 2. __Test design — HTTP API__

