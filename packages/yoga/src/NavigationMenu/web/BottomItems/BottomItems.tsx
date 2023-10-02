import React from 'react';

import * as Styles from './styles';

export type BottomItemsProps = {
  children: React.ReactNode;
};

const BottomItems = ({ children }: BottomItemsProps) => {
  return (
    <Styles.ItemsContainer>
      <Styles.Items>{children}</Styles.Items>
    </Styles.ItemsContainer>
  );
};

export default BottomItems;
