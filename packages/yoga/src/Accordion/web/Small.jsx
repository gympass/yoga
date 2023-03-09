import React from 'react';

import Accordion from './Accordion';

function AccordionSmall(props) {
  return <Accordion {...props} small />;
}

AccordionSmall.propTypes = Accordion.propTypes;

AccordionSmall.defaultProps = Accordion.defaultProps;

export default AccordionSmall;
