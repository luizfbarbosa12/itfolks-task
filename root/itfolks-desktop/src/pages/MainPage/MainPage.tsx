import {
  ToggleButton,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className='container'>
      <header className='header-wrapper' />
      <div className='main-content'>
        <main className='main-container'>
          <h1>Workplace details</h1>
          <p>Provide the details of the job</p>
          <div>
            <h3>Operating mode</h3>
            <div>
              <ToggleButton>Stationary work</ToggleButton>
              <ToggleButton>Hybrid work</ToggleButton>
              <ToggleButton>Remote work</ToggleButton>
            </div>
            <TextField label='Town' />
          </div>
          <div>
            <h3>Estimated amount of work</h3>
            <div>
              <ToggleButton>Full-time</ToggleButton>
              <ToggleButton>Part-time</ToggleButton>
              <ToggleButton>Additional job</ToggleButton>
            </div>
          </div>
          <div>
            <h3>Benefits (Optional)</h3>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='Label'
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label='Required'
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox />}
                  label='Disabled'
                />
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
