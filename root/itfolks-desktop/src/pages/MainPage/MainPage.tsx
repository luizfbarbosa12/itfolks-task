import {
  ToggleButton,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  ToggleButtonGroup,
} from '@mui/material';
import './MainPage.scss';
import checkboxValues from '../../data/checkboxValues.json';
import { useState } from 'react';

const MainPage = () => {
    const [checked, setChecked] = useState(false)
  return (
    <div className='container'>
      <header className='header-wrapper' />
      <div className='main-content'>
        <main className='main-container'>
          <h1>Workplace details</h1>
          <p>Provide the details of the job</p>
          <div className='operating-mode'>
            <h3>Operating mode</h3>
            <div className='operating-options'>
              <ToggleButton value='stationary'>Stationary work</ToggleButton>
              <ToggleButton value='hybrid'>Hybrid work</ToggleButton>
              <ToggleButton value='remote'>Remote work</ToggleButton>
            </div>
            <TextField label='Town' className='input-styles' />
          </div>
          <div className='section-2'>
            <h3>Estimated amount of work</h3>
            <div>
              <ToggleButton>Full-time</ToggleButton>
              <ToggleButton>Part-time</ToggleButton>
              <ToggleButton>Additional job</ToggleButton>
            </div>
          </div>
          <div className='section-3'>
            <h3>Benefits (Optional)</h3>
            <div>
              <FormGroup className="form">
                {checkboxValues.map((item) => {
                  return (
                    <FormControlLabel
                      control={<Checkbox checked={checked} />}
                      label={item}
                    />
                  );
                })}
              </FormGroup>
            </div>
          </div>
        </main>
        <aside className='aside-wrapper'></aside>
      </div>
      <footer className='footer-wrapper '></footer>
    </div>
  );
};

export default MainPage;
