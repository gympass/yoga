import { RadioGroup, RadioButton, Radio } from './native';

const ExportRadioGroup = Object.assign(RadioGroup, {
  Button: RadioButton,
  Radio,
});

export default ExportRadioGroup;
