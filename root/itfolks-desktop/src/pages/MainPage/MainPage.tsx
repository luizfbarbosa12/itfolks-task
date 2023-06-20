import './MainPage.scss';
import FormGroupComponent from '../../components/molecules/FormGroup';
import InputComponent from '../../components/atoms/Input/InputComponent';
import OperatingOptions from '../../components/molecules/OperatingOptions/OperatingOptions';
import AmountOfWorkOptions from '../../components/molecules/AmountOfWorkOptions/AmountOfWorkOptions';
import { useState } from 'react';

const MainPage = () => {
  const [townInput, setTownInput] = useState<string | undefined>('Town');
  
  
  return (
    <div className='container'>
      <header className='header-wrapper' />
      <div className='main-content'>
        <main className='main-container'>
          <h1>Workplace details</h1>
          <p>Provide the details of the job</p>
          <div className='operating-mode'>
            <h3>Operating mode</h3>
            <OperatingOptions />
            <InputComponent label='Town' onChange={setTownInput} value={townInput}/>
          </div>
          <div className='section-2'>
            <h3>Estimated amount of work</h3>
            <AmountOfWorkOptions />
          </div>
          <div className='section-3'>
            <h3>Benefits (Optional)</h3>
            <div>
              <FormGroupComponent/>
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
