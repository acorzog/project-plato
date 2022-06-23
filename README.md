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

Tests will be placed in the `/cypress/e2e/test.cy.js` file

To run tests with the open UI
  - Run
    ```
    npm run cy:open
    ```
    - Then select "E2E Testing" option 
    - Select the browser you want to use (Suggested ELECTRON) 
    - Click on the "Start E2E Testing in Electron"
    - When the new window is open please find the tests on the "test.cy.js" file

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

### 1. First Scenario
  - Test Case Title: Get information about an employee
  - Test Expected Results: By calling the API for a specific "employeeId" the user should be able to GET the information from that particular employee stored in the API.
  - Test Case Steps: 
    - Set method as GET
    - Call API with specific {employeeId} "/employee/"3fa85f64-5717-4562-b3fc-2c963f66afa6""
  - Response to evaluate:
    - Validate response code equal to "200"
    - Validate response should contain information from that specific employee
    - Validate each employee should have the following information
      - fullName
      - salary
      - department

### 2. Second Scenario
  - Test Case Title: Create a new employee
  - Test Expected Results: By posting on the API the user should be able to POST the information from an employee and be stored in the API.
  - Test Case Steps: 
    - Set method as POST
    - Send a request to the API "/employee/"
    - Set information in the body of the request as below
```sh
{
  "name": "Phil Tomas",
  "salary": 1500,
  "department": "Finance"
}
````
  - Response to evaluate:
    - Validate response code equal to "201"
    - Validate description equal to "Created"
    - Validate schema value for the "employeeId"

### 3. Third Scenario
  - Test Case Title: Attempt to create a new employee with the wrong body data type
  - Test Expected Results: By posting on the API the user should NOT be able to create employee information and be stored in the API as the data value doesn't correspond to the one expressed in the schema, Salary type should be an Integer but it was sent as a String.
  - Test Case Steps: 
    - Set method as POST
    - Send a request to the API "/employee/"
    - Set information in the body of the request as below
```sh
{
  "name": "Phil Tomas",
  "salary": "one hundred",
  "department": "Finance"
}
````
  - Response to evaluate:
    - Validate response code equal to "500"
    - Validate Type equal to "Unknown "

### 4. Fourth Scenario
  - Test Case Title: Fail to get information about employees
  - Test Expected Results: By calling the API without a specific "employeeId" the user should NOT be able to GET the information from that particular employee stored in the API.
  - Test Case Steps: 
    - Set method as GET
    - Call API without specific {employeeId} "/employee/"
  - Response to evaluate:
    - Validate response code equal to "404"
    - Validate response should NOT contain information from any employee/s

### 5. Fifth Scenario
  - Test Case Title: Attempt to create a new employee with an empty body
  - Test Expected Results: By posting on the API the user should NOT be able to create employee information and be stored in the API as the data is EMPTY.
  - Test Case Steps: 
    - Set method as POST
    - Send a request to the API "/employee/"
    - Set NO information in the body of the request as below
```sh
{

}
````
  - Response to evaluate:
    - Validate response code equal to "405"
    - Validate error message equal to "Invalid input"