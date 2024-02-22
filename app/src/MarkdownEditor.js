import React, { useState } from 'react';
import { Box, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import marked from 'marked';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const toast = useToast();

  const handleChange = (e) => {
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
  };

  return (
    <Box p={5}>
      <Input type='text' placeholder='Enter your markdown here...' onChange={handleChange} />
      <Textarea placeholder='Markdown Output' value={marked(markdown)} readOnly />
      <Button onClick={() => setMarkdown('')}>Clear</Button>
    </Box>
  );
};

export default MarkdownEditor;
