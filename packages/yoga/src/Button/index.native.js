import Button from './native/Button';
import ButtonText from './native/Text';
import ButtonLink from './native/Link';
import ButtonIcon from './native/Icon';

const ExportButton = Object.assign(Button, {
  Text: ButtonText,
  Link: ButtonLink,
  Icon: ButtonIcon,
});

export default ExportButton;
