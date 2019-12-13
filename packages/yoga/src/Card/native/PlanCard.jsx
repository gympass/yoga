import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Plan = styled(Card)``;

const PlanCard = ({ ...rest }) => <Plan {...rest} />;

PlanCard.displayName = 'PlanCard';

export default PlanCard;
