import React from 'react';
import { Button } from '@mui/material';

const IconBtn = ({ data }) => {
  const { icon, text, action = () => {}, url = '' } = data;
  return (
    <Button
      variant="text"
      sx={{ color: 'black', margin: 1 }}
      href={url}
      startIcon={icon}
      onClick={(e) => action(e)}
    >
      {text}
    </Button>
  );
};

export default IconBtn;
