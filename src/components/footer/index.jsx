import { Box, Link } from '@chakra-ui/react';

import React from 'react';

export default function Footer() {
  return (
    <Box textAlign="center" my={10} mx={5}>
      This site created with ❤️ by{' '}
      <Link href="https://github.com/joshuanatanielnm" fontWeight="700">
        @joshuanatanielnm
      </Link>
    </Box>
  );
}
