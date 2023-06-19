import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState, MouseEvent } from 'react';

const AmountOfWorkOptions = () => {
  const [selectedOption, setSelectedOption] = useState('full-time');

  const handleOptionChange = (event: MouseEvent<HTMLElement>) => {
    setSelectedOption((event.target as HTMLButtonElement).value);
  };

  return (
    <ToggleButtonGroup value={selectedOption} onChange={handleOptionChange}>
      <ToggleButton color='primary' value="full-time">Full-time</ToggleButton>
      <ToggleButton color='primary' value="part-time">Part-time</ToggleButton>
      <ToggleButton color='primary' value="additional-job">Additional job</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default AmountOfWorkOptions;





