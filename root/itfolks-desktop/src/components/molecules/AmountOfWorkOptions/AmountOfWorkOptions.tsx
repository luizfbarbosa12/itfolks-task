import { ToggleButton } from '@mui/material';


const AmountOfWorkOptions = () => {
  return (
    <div>
      <ToggleButton value='full-time'>Full-time</ToggleButton>
      <ToggleButton value='part-time'>Part-time</ToggleButton>
      <ToggleButton value='additional-job'>Additional job</ToggleButton>
    </div>
  );
};

export default AmountOfWorkOptions;
