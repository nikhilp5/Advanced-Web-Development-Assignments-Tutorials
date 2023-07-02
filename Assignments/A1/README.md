CSCI 5709: Assignment 1

## This README is created for Assignment 1 for the course CSCI 5709 - Advanced Topics in Web Development.

- Date Created: 9 Feb 2023
- Last Modification Date: 9 Feb 2023

## GitLab Repo

- Individual Assignment 1 Repository URL: https://git.cs.dal.ca/nsp/csci-5709_assignment1_b00934514

## Deployed App

- Netlify Link:https://iridescent-swan-53c72d.netlify.app/ 

## Author

- Nikhil Panikkassery
- nk561034@dal.ca

## Project Description:-

Developed search/add content for watchlist using React which will used in our Application.

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

### AddContent.js

Used Search,IconButton,InputBase,Paper components from @mui(material UI) package for making UI componenets[3].

### contentsSlice.js

Used createSlice from @reduxjs/toolkit(redux) for handling data/variable states among multiple components[4].

### contentControl.js
Used Clear, Visibility, VisibilityOff,Button, Stack, Tooltip components from @mui(material UI) package for making UI componenets[3].
Used useDispatch from react-redux(redux)  to handle various actions performed on data and its states in redux[4].

### contentSearchResult.js
Used  Box,Button,Card,CardContent, CardMedia, Stack, Typography components from @mui(material UI) package for making UI componenets[3].
Used useDispatch and useSelector from react-redux(redux) to handle various actions performed on data and its states in redux[4].

### contentCard.js
Used  Card, CardMedia components from @mui(material UI) package for making UI componenets[3].

### contentGrid.js
Used  Grid component from @mui(material UI) package for making UI componenets[3].

### Header.js
Used  AppBar, Box, Button, Toolbar, Typography components from @mui(material UI) package for making UI componenets[3].
Used Link from react-router-dom(router) package for routing/navigating between components [7].

### PageToggle.js
Used  Button component from @mui(material UI) package for making UI componenets[3].
Used useNavigate from react-router-dom(router) package for routing/navigating between components through buttons.[7].

### WatchedContent.js
### WatchListContent.js
Used  Container, Typography components from @mui(material UI) package for making UI componenets[3].
Used useSelector from react-redux(redux) to handle various actions performed on data and its states in redux[4].

### App.js
Used BrowserRouter, Routes, Route from react-router-dom(router) package for setting paths for routing/navigation between components [7].
 
### contentApi.js 
Used createApi, fetchBaseQuery from @reduxjs/toolkit(redux) to fetch data from external API[4].

### index.js
Used Provider from react-redux to provide data to root component received by store/API [4].
 
### store.js
Used configureStore from @reduxjs/toolkit(redux) for configuring methods to handle data passed by external API [4].

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript RTE
- [React](https://reactjs.org/) - JavaScript Frontend Library
- [Material UI](https://mui.com/) - Web Component library
- [Redux](https://redux.js.org/) - JavaScript library
- [React Router](https://reactrouter.com/en/main) - library to routing between pages
- [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) - tool for handling events in redux
- [The movie database](https://www.themoviedb.org/) - Used external api from tmdb for data.

## References

[1] Matt The Dev, “Create a Movie Watchlist with React Hooks, Context API and localStorage” Youtube. [Online]. Available: https://youtu.be/1eO_hNYzaSc. [Accessed: 08-Feb-2023]. 

[2] “Stack Overflow” Stack Overflow. [Online]. Available: https://stackoverflow.com/. [Accessed: 08-Feb-2023]. 

[3] “MUI The React Component Library” MUI. [Online]. Available: https://mui.com/. [Accessed: 08-Feb-2023]. 

[4] “Redux A Predictable State Container” Redux. [Online]. Available: https://redux.js.org/. [Accessed: 08-Feb-2023]. 

[5] “The movie database” TMD.[Online]. Available: https://www.themoviedb.org/. [Accessed: 08-Feb-2023].

[6] developedbyed, “Redux For Beginners | React Redux Tutorial” Youtube. [Online]. Available: https://youtu.be/CVpUuw9XSjY. [Accessed: 08-Feb-2023]. 

[7]“React Router” React Router. [Online]. Available: https://reactrouter.com/en/main. [Accessed: 08-Feb-2023]. 
