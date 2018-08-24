MyBrilliantWeatherApp
A weather app built with React

For live app, visit https://enigmatic-mesa-33381.herokuapp.com/

This app is built for a test with create-react-app.

This app consists of a home page where a user can search for locations. The locations are rendered as a list. The user can click on a location which will redirect to a location page with the location id to fetch detailed weather infromation.

API: The API is provided by https://www.metaweather.com/api/ and details can be fond on this link. React's built-in fetch() is used for fetching data from the api. To bypass CORS issue, I have appended the api URL with https://cors-anywhere.herokuapp.com/ which helps bypass CORS.

Layout: The layout of the app is responsive and only standard CSS is used for styling.

Routing: React Router is used for routing.

State Management: React's setState() and this.state() is used for state management given the simplicity of this app.

Unit Testing: Jest and Enzyme is used for testing. I have added a couple of tests for demonstartion purposes. I will usually use snapshots for components with UI only and shallow and deep rendering for components with state and props. I would also use mock api for testing fetch functions.