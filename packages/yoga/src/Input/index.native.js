import { Input, Password, Email, InputNumber, Tel } from './native';

const ExportInput = Object.assign(Input, {
  Password,
  Email,
  Number: InputNumber,
  Tel,
});

export default ExportInput;
