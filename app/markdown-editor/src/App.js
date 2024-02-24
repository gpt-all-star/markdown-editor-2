import React from 'react';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import MarkdownEditor from './MarkdownEditor';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box m={5}>
        <MarkdownEditor />
      </Box>
    </ChakraProvider>
  );
}

export default App;