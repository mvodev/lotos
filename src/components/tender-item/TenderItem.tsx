import { FC } from 'react';

import styles from './TenderItem.module.css';

type Props = {
  header: string;
  events: string;
  productionTime: number;
  guarantee: number;
  conditions: string;
  price: string;
  actions: string;
};

const TenderItem: FC<Props> = ({ header, events, productionTime, guarantee, conditions, price, actions }) => {
  return (
    <div className={styles.tenderItem}>
      <h5>{header}</h5>
      <span>{events}</span>
      <span>{productionTime}</span>
      <span>{guarantee}</span>
      <span>{conditions}</span>
      <span>{price}</span>
      <span>{actions}</span>
    </div>
  );
};

export default TenderItem;
