import React, { createContext, useContext, useState } from 'react';
import { TextField, Button } from '@mui/material';

export const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [headerText, setHeaderText] = useState('');

  const updateInputValue = (value) => {
    setInputValue(value);
  };

  const updateHeaderText = () => {
    setHeaderText(inputValue);
  };

  return (
    <TextContext.Provider value={{ inputValue, headerText, updateInputValue, updateHeaderText }}>
      {children}
      <div style={{ position: 'fixed', bottom: '60px', width: '100%', padding: '5px' , background: '#fff', boxShadow: '0 -2px 5px rgba(0,0,0,0.1)', zIndex: 1000 }}>
        <TextField
          label="Enter your name"
          variant="outlined"
          value={inputValue}
          onChange={(e) => updateInputValue(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={updateHeaderText}>
          Update Header
        </Button>
      </div>
    </TextContext.Provider>
  );
};

export default TextProvider;

export const useTextContext = () => {
  return useContext(TextContext);
};