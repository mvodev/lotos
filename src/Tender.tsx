import { FC } from 'react';

import TenderItem from '@components/tender-item/TenderItem';

import './index.module.css';
import styles from './Tender.module.css';

type Props = {
  header:string;
}

const Tender: FC<Props> = ({header}) => {
  return (
    <div className="app">
      <h1 className={styles.header}>{`Ход торгов ${header}`}</h1>
      <TenderItem
        header="tender1"
        events="-"
        productionTime={80}
        guarantee={20}
        conditions="30%"
        price="3250"
        actions=""
      />
    </div>
  );
};

export default Tender;
