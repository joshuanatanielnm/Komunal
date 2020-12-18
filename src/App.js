import * as React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import CreateEvent from './pages/events/CreateEvent';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

// 3. extend the theme
const customTheme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CreateEvent />
    </ChakraProvider>
  );
}

export default App;
