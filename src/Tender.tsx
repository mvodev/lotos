import { FC } from 'react';

import TenderItem from '@components/tender-item/TenderItem';

import { tenders } from './tenders';
import './index.module.css';
import styles from './Tender.module.css';

type Props = {
  header: string;
};

const Tender: FC<Props> = ({ header }) => {
  return (
    <div className="app">
      <h1 className={styles.header}>{`Ход торгов ${header}`}</h1>
      <div className={styles.tenders}>
        {tenders.map((tender) => (
        <TenderItem key={tender.header} {...tender} />
      ))}
      </div>
    </div>
  );
};

export default Tender;
