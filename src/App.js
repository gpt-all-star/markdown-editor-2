import React, { useState } from 'react';
import { Box, VStack, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import marked from 'marked';

function App() {
  const [markdown, setMarkdown] = useState('');
  const toast = useToast();

  function handleChange(e) {
    try {
      setMarkdown(e.target.value);
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Input type='text' placeholder='Enter your markdown here...' onChange={handleChange} />
        <Textarea placeholder='Markdown Output' value={marked(markdown)} readOnly />
        <Button onClick={() => setMarkdown('')}>Clear</Button>
      </VStack>
    </Box>
  );
}

export default App;
