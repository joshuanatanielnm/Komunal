import * as React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './hooks/Auth';
import CreateEvent from './pages/events/CreateEvent';
import LandingPage from './pages/index';
import PrivateRoute from './pages/PrivateRoute';
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
    <AuthProvider>
      <Router>
        <ChakraProvider theme={customTheme}>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/create-event" component={CreateEvent} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </ChakraProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
