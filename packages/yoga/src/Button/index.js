import Button from './web/Button';
import ButtonOutline from './web/Outline';
import ButtonText from './web/Text';
import ButtonLink from './web/Link';
import ButtonIcon from './web/Icon';

const ExportButton = Object.assign(Button, {
  Outline: ButtonOutline,
  Text: ButtonText,
  Link: ButtonLink,
  Icon: ButtonIcon,
});

export default ExportButton;
