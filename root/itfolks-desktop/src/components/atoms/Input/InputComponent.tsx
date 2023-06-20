import { TextField } from '@mui/material';
import './InputComponent.scss';

interface InputComponentProps {
  label?: string;
  value?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
}

const InputComponent = ({
  label = 'Town',
  value,
  onChange,
}: InputComponentProps) => {
  return (
    <TextField
      label={label}
      className='input-styles'
      value={value}
      onChange={onChange}
    />
  );
};

export default InputComponent;
