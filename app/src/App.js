import React from 'react';
import { ChakraProvider, CSSReset, Box, VStack, Heading, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import MarkdownEditor from './MarkdownEditor';

function App() {
  const { colorMode } = useColorMode();

  return (
    <ChakraProvider>
      <CSSReset />
      <Box textAlign='center' fontSize='xl'>
        <VStack spacing={8}>
          <ColorModeSwitcher justifySelf='flex-end' />
          <Heading fontSize='2xl'>Markdown Editor</Heading>
          <Box width='80%'>
            <MarkdownEditor />
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
