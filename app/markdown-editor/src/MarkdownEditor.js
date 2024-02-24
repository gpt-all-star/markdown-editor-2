import React, { useState, useRef } from 'react';
import { Box, Textarea } from '@chakra-ui/react';
import MarkdownPreview from './MarkdownPreview';
import MarkdownToolbar from './components/MarkdownToolbar';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const textAreaRef = useRef(null);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleSelect = () => {
    const text = textAreaRef.current.value.slice(
      textAreaRef.current.selectionStart,
      textAreaRef.current.selectionEnd
    );
    setSelectedText(text);
  };

  const handleButtonClick = (style) => {
    const styledText = `${style}${selectedText}${style}`;
    setMarkdown(markdown.replace(selectedText, styledText));
  };

  return (
    <Box>
      <MarkdownToolbar onButtonClick={handleButtonClick} />
      <Textarea
        ref={textAreaRef}
        value={markdown}
        onChange={handleInputChange}
        onSelect={handleSelect}
        placeholder="Enter Markdown"
      />
      <MarkdownPreview markdown={markdown} />
    </Box>
  );
}

export default MarkdownEditor;