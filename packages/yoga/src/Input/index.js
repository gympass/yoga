import { Input, Password, Email, InputNumber, Tel, Phone } from './web';

const ExportInput = Object.assign(Input, {
  Password,
  Email,
  Number: InputNumber,
  Tel,
  Phone,
});

export default ExportInput;
