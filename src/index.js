import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@material-ui/styles';
import { theme, themeWithRtl } from './theme';
import Summary from './views/CustomerManagementDetails/Summary/index'
import Logs from './views/CustomerManagementDetails/Logs'
import Statistics from './views/Statistics'
import './mock'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Statistics />
    <Summary />
    <Logs />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
