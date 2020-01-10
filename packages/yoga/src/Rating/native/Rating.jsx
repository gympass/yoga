import React, { useState } from 'react';
import styled from 'styled-components';

// import Star from '../star.svg';

const Rating = styled.View``;

export default () => {
  const [size, setSize] = useState(12);

  return <Rating>{/* <Star width={size} height={size} /> */}</Rating>;
};
