import React from 'react';

import Accordion from './Accordion';

const AccordionSmall = props => <Accordion {...props} small />;

AccordionSmall.propTypes = Accordion.propTypes;

AccordionSmall.defaultProps = Accordion.defaultProps;

export default AccordionSmall;
