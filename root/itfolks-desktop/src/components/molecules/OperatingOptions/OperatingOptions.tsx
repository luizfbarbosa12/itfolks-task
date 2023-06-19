import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import './OperatingOptions.scss';
import { MouseEvent, useState } from 'react';

const OperatingOptions = () => {
  const [selectedOption, setSelectedOption] = useState('stationary');

  const handleOptionChange = (event: MouseEvent<HTMLElement>) => {
    setSelectedOption((event.target as HTMLButtonElement).value);
  };
  console.log(selectedOption);
  return (
    <ToggleButtonGroup
      className='operating-options'
      value={selectedOption}
      onChange={handleOptionChange}
    >
      <ToggleButton color='primary' value='stationary'>Stationary work</ToggleButton>
      <ToggleButton color='primary' value='hybrid'>Hybrid work</ToggleButton>
      <ToggleButton color='primary' value='remote'>Remote work</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default OperatingOptions;
