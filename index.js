import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import bgMessaging from './bgMessaging';

AppRegistry.registerComponent(appName, () => App);
// Task listen message background android
// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
