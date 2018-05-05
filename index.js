import { YellowBox,AppRegistry } from 'react-native';
import App from './App';

console.ignoredYellowBox = ['Remote debugger'];
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated in plain JavaScript React classes.']);


AppRegistry.registerComponent('ECommerce', () => App);
