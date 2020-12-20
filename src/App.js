import * as React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CreateEvent from './pages/events/CreateEvent';
import LandingPage from './pages/index';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

// 3. extend the theme
const customTheme = extendTheme({ config });

function App() {
  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/create-event" component={CreateEvent}></Route>
        <Route path="/sign-in" component={SignIn}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
      </ChakraProvider>
    </Router>
  );
}

export default App;
