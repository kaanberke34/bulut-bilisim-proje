import { registerRootComponent } from 'expo';
import axios from 'axios';

import App from './App';

//axios.defaults.baseURL = 'https://malice-api.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = false;

registerRootComponent(App);
