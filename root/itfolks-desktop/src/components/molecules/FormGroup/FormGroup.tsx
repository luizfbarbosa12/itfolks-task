import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import checkboxValues from '../../../data/checkboxValues.json';
import { useState, ChangeEvent } from 'react';

interface FormGroupComponentProps {
  checked?: boolean;
}

const FormGroupComponent: React.FC<FormGroupComponentProps> = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, value]);
    } else {
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(item => item !== value),
      );
    }
  };

  return (
    <FormGroup className='form'>
      {checkboxValues.map(item => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={checkedItems.includes(item)}
              value={item}
              onChange={handleCheckboxChange}
            />
          }
          label={item}
        />
      ))}
    </FormGroup>
  );
};

export default FormGroupComponent;