/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routes from './app/routes';
import App from "./app/app";

AppRegistry.registerComponent(appName, () => App );
