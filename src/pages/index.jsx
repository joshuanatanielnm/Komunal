import {} from '@chakra-ui/react';

import * as React from 'react';

import Event from '../components/event/index';
import Hero from '../components/hero';
import Navbar from '../components/navbar/index';

export default function Pages() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
      </div>
      <div>
        <Event />
      </div>
    </div>
  );
}
