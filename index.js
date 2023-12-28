/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {AppStateProvider} from './src/data/AppStateContext';

function AppwithData() {
  return (
    <AppStateProvider>
      <App />
    </AppStateProvider>
  );
}
AppRegistry.registerComponent(appName, () => AppwithData);
