import { Input, InputContainer, Label } from './styles';
import { NumberInputProps, TextInputProps } from './types';

export const TextInput = ({ value, placeholder, onChange }: TextInputProps) => {
  return (
    <InputContainer>
      <label>&nbsp;</label>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export const NumberInput = ({
  value,
  placeholder,
  label,
  onChange
}: NumberInputProps) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
};
