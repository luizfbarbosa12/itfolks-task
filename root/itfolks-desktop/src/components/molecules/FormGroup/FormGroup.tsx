import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import checkboxValues from '../../../data/checkboxValues.json';

interface FormGroupComponentProps  {
    checked?: boolean
}
const FormGroupComponent = ({checked}: FormGroupComponentProps) => {
  return (
    <FormGroup className='form'>
      {checkboxValues.map(item => {
        return (
          <FormControlLabel
            control={<Checkbox checked={checked} />}
            label={item}
          />
        );
      })}
    </FormGroup>
  );
};

export default FormGroupComponent;
