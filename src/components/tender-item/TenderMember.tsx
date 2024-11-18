import { FC } from 'react';

import { Tender } from '../../tenders';
import styles from './TenderMember.module.css';

const TenderMember: FC<Tender> = ({ header, events, productionTime, guarantee, conditions, price, actions }) => {
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

export default TenderMember;
