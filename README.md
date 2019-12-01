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

End-to-end testing (* Make sure you're on MAC, iOS simulator is setup and prerequisites of Detox are met https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md)
1. `npm run start`
2. `npm run detox_build`
3. `npm run detox_test`

End-to-end testing offline
1. `npm run start`
2. `npm run detox_build_offline`
3. `npm run detox_test_offline`

Known issues
1. Choice radio buttons are not visible when unchecked on iOS. This is due to a bug in react-native-paper.
