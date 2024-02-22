import React from 'react';
import { Box } from '@chakra-ui/react';

const MarkdownDisplay = ({ markdown }) => {
  return <Box dangerouslySetInnerHTML={{__html: markdown}}></Box>;
};

export default MarkdownDisplay;