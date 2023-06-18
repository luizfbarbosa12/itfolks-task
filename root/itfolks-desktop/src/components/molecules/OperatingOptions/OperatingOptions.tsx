import { ToggleButton } from '@mui/material';
import './OperatingOptions.scss'

const OperatingOptions = () => {
  return (
    <div className='operating-options'>
      <ToggleButton value='stationary'>Stationary work</ToggleButton>
      <ToggleButton value='hybrid'>Hybrid work</ToggleButton>
      <ToggleButton value='remote'>Remote work</ToggleButton>
    </div>
  );
};

export default OperatingOptions;
