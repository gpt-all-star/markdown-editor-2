import React from 'react';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { MdFormatBold, MdFormatItalic, MdFormatUnderlined, MdCode } from 'react-icons/md';

function MarkdownToolbar({ onButtonClick }) {
  const buttons = [
    { icon: MdFormatBold, label: 'Bold', style: '**', id: 'bold' },
    { icon: MdFormatItalic, label: 'Italic', style: '*', id: 'italic' },
    { icon: MdFormatUnderlined, label: 'Underline', style: '__', id: 'underline' },
    { icon: MdCode, label: 'Code', style: '```', id: 'code' }
  ];

  return (
    <ButtonGroup spacing={1} marginBottom={4}>
      {buttons.map(({ icon, label, style, id }) => (
        <IconButton
          key={id}
          aria-label={label}
          icon={React.createElement(icon)}
          onClick={() => onButtonClick(style)}
        />
      ))}
    </ButtonGroup>
  );
}

export default MarkdownToolbar;
