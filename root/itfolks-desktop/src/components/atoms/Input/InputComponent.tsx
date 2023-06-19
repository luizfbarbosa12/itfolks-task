import { TextField } from '@mui/material';
import './InputComponent.scss';
import { useState } from 'react';

const InputComponent = () => {
  const [townInput, setTownInput] = useState<string | undefined>('Town');
  
  return (
    <TextField
      label='Town'
      className='input-styles'
      value={townInput}
      onChange={e => setTownInput(e.target.value)}
    />
  );
};

export default InputComponent;
