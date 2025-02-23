import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
  const today = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ backgroundColor: 'green', color: 'white', textAlign: 'center', padding: '10px', position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
      <p>&copy; {today} CodeCraft Labs. All rights reserved.</p>
    </Box>
  );
};

export default Footer;