CSCI 5709: Tutorial 3

## This README is created for Tutorial 3 for the course CSCI 5709 - Advanced Topics in Web Development.

- Date Created: 16 Feb 2023
- Last Modification Date: 16 Feb 2023

## GitLab Repo

- Individual Tutorial 3 Repository URL:https://git.cs.dal.ca/nsp/csci-5709_tutorial3_b00934514

## Deployed App

- Netlify Link:https://csci5709tutorial3.netlify.app/

## Author

- Nikhil Panikkassery
- nk561034@dal.ca

## Project Description:-

Tutorial 3:- Form with register and display page.

## Getting Started

This react application is created using command(npx create-react-app projectname).


### Prerequisites

To have a local copy of this lab / assignment / project up and running on your local machine, you will first need to install the following software/libraries / plug-ins

```
Node.js
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

1. Install [Node.js](https://nodejs.org/en/download/) from the following link:

2. Clone the git repository.

3. Open the terminal in Visual Studio Code and run the following commands:

```
> npm install
> npm run start
```

## Deployment


### Manual deployment

1. Login to [Netlify](https://app.netlify.com/).

2.Click "Add a new site" on Netlify

3.Click "Drop manually"

4. Run "npm run build" command in terminal in Visual Studio Code in local.

5. Drag folder "build" from local project folder and drop it in Netlify.

6. Click Deploy Site.

7.Netlify should provide url for the application.

## Sources Used

### Register.js
 Lines 35,36,37

 Used regex patterns for validations.

 var letters = /^[a-zA-Z]+$/; 
 Adapted from https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
  
 var email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
 Adapted from https://regexr.com/3e48o
 
 var password = /^[ A-Za-z0-9_@./#&+-]*$/; 
 Adapted from https://stackoverflow.com/questions/17439917/regex-to-accept-alphanumeric-and-some-special-character-in-javascript

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript RTE
- [React](https://reactjs.org/) - JavaScript Frontend Library
- [React Router](https://reactrouter.com/en/main) - library to routing between pages
