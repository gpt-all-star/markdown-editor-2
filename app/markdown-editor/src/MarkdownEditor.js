import React, { useState } from 'react';
import { Box, Textarea } from '@chakra-ui/react';
import MarkdownPreview from './MarkdownPreview';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <Box>
      <Textarea value={markdown} onChange={handleInputChange} placeholder="Enter Markdown" />
      <MarkdownPreview markdown={markdown} />
    </Box>
  );
}

export default MarkdownEditor;