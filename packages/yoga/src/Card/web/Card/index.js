import Card from './Card';
import Header from './Header';
import Content from './Content';
import Actions from './Actions';

const ExportCard = Object.assign(Card, {
  Header,
  Content,
  Actions,
});

export default ExportCard;
