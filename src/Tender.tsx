import { FC } from 'react';

import TenderMembers from './components/tender-members/TenderMembers';
import './index.module.css';
import styles from './Tender.module.css';

type Props = {
  header: string;
};

const Tender: FC<Props> = ({ header }) => {
  return (
    <div className="app">
      <h1 className={styles.header}>{`Ход торгов ${header}`}</h1>
      <h2 className={styles.subHeader}>
        Уважаемые участники,во время вашего хода вы можете изменить параметры торгов,указанные в таблице
      </h2>
      <TenderMembers />
    </div>
  );
};

export default Tender;
