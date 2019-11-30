# hey.car-challenge

To get started,
1. Clone this repo
2. `cd HeyCarChallenge`
3. `npm install`
4. `npm run android` or `npm run ios`

To test UI elements with Storybook,
1. In `App.js` comment `export default App;` and uncomment `export default Storybook;`
2. `npm run storybook`
3. `npm run start`

Unit testing
1. `npm test`

End-to-end testing
1. `detox build`
2. `detox test` * Make sure you're on MAC and iOS simulator is setup

Known issues\
Choice radio buttons are not visible when unchecked on iOS. This is due to a bug in react-native-paper.
