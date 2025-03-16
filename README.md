# Team Lindy Bingo

An application for running a bingo game.

Inspired by [osric.com/bingo-card-generator](https://osric.com/bingo-card-generator/)
([github](https://github.com/cherdt/BingoCardGenerator)).

This is a React application, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Games

There are several different lists of words that can be used to play Bingo.
The default game is Team Lindy Bingo, where players watch videos of team Lindy Hop routines together.

Configuration is with JSON files, and the words on the cards are randomly chosen from the list defined in the chosen configuration:

  - [teamLindy.json](src/data/teamLindy.json) ([default](https://teamlindybingo.com/)) - Things that happen in Team Lindy Hop routines
  - [test.json](src/data/test.json) ([/test](https://teamlindybingo.com/test)) - Candidates for addition to the main Team Lindy list
  - [balboa.json](src/data/balboa.json) ([/balboa](https://teamlindybingo.com/balboa)) - Things that happen in Balboa performances (WIP)
  - [numbers.json](src/data/numbers.json) ([/numbers](https://teamlindybingo.com/numbers)) - A classic 90-number bingo game

Submissions of new word lists are welcomed!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `npm run deploy`

Deploys the app to github pages.
