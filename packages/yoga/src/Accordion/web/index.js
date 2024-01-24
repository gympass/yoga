import Accordion from './Accordion';
import Summary from './Summary';
import Content from './Content';
import AccordionSmall from './Small';

const ExportAccordion = Object.assign(Accordion, {
  Content,
  Summary,
  Small: AccordionSmall,
});

export default ExportAccordion;
