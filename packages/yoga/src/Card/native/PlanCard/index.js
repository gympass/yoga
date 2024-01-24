import { Actions, Button, ButtonText } from './Actions';
import Content from './Content';
import PlanCard from './PlanCard';
import Subtitle from './Subtitle';
import Tag from './Tag';
import { List, ListItem } from './List';

const ExportPlanCard = Object.assign(PlanCard, {
  Actions,
  Button,
  ButtonText,
  Content,
  List,
  ListItem,
  Subtitle,
  Tag,
});

export default ExportPlanCard;
