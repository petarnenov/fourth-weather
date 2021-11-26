# 5 Days Weather Project

## Exercise description

Create an app that displays the current 5-day weather forecast for a location of your choice. Show
details for each day. Use Geolocation to retrieve the user’s current position. Retrieve a 5-day
forecast for a user-specified city. Allow users to drill into the hour detail for each day.

1. Try not to spend more than one working day on your solution (even if you do not
   complete the entire exercise).
2. Build a web app using React.
3. OpenWeatherMap API Documentation: http://openweathermap.org/forecast5
4. Give some thought to what will make a decent user experience. We would like to see
   something readable but with no need to go all out on sleek and flashy UI elements.
5. Use any supporting technologies, package management, build systems, component
   libraries that you are familiar with and feel are appropriate.
6. You can use any 3-rd party library.
7. Include unit tests for the most important parts of the code.
8. Provide a readme.md file that:
   o Documents how to run / build / test your creation.
   o Documents anything you might implement with more time (features, fixes,
   technical debt corrections etc.).

9. The solution should be able to run locally on the browser.
10. Submit your code into a public git repository of your choice (GitHub / BitBucket etc.) -
    (ideally with multiple commits to demonstrate your workflow)

## Install project

### In development mode

1.  Clone and install repository

```bash
git clone https://github.com/petarnenov/fourth-weather.git
cd fourth-weather
npm install
npm start
```

2. Open Browser and goto page:
   [5 Weather Days Forecast](http://localhost:3000)

### In production mode

1. Clone, install and build

```bash
git clone https://github.com/petarnenov/fourth-weather.git
cd fourth-weather
npm install
npm run build
```

2. Copy build folder to corresponding production server folder

## Test project

### Run tests

```bash
npm test
```

### Run test coverage

```bash
npm run test:coverage
```
