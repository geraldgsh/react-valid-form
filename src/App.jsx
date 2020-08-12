import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUpContainer from './containers/SignUpContainer';
import './assets/App.css';

const App = () => (
  <MuiThemeProvider>
    <SignUpContainer />
  </MuiThemeProvider>
);

export default App;
