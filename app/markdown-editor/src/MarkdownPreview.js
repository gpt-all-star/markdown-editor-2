import React from 'react';
import PropTypes from 'prop-types';
import { marked } from 'marked';
import { Box } from '@chakra-ui/react';

const MarkdownPreview = ({ markdown }) => {
  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      p={2}
      rounded="md"
      mt={5}
      dangerouslySetInnerHTML={createMarkup()}
    />
  );
};

MarkdownPreview.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default MarkdownPreview;