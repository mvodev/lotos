import { FC, useEffect, useState } from 'react';

import TenderItem from './components/tender-item/TenderItem';
import { useTimer } from './hooks/useTimer';
import { tenders } from './tenders';
import './index.module.css';
import styles from './Tender.module.css';

type Props = {
  header: string;
};

const Tender: FC<Props> = ({ header }) => {
  const timer = useTimer(2);
  const { remained, expired, resetTimer } = timer;
  const [activeTrader, setAvtiveTrader] = useState(0);
  const [tenderMembers, setTenderMembers] = useState(
    tenders.map((tender, index) => {
      if (index === activeTrader)
        return (
          <div className={styles.activeTrader}>
            <span>{remained}</span>
            <TenderItem key={tender.header} {...tender} />
          </div>
        );
      return <TenderItem key={tender.header} {...tender} />;
    }),
  );
  useEffect(() => {
    if (expired) {
      resetTimer(2);
      if (activeTrader + 1 > tenders.length-1) {
        setAvtiveTrader(0);
      } else setAvtiveTrader(activeTrader + 1);
    }
  }, [expired, resetTimer, activeTrader]);
  useEffect(() => {
    setTenderMembers(
      tenders.map((tender, index) => {
        if (index === activeTrader)
          return (
            <div className={styles.activeTrader}>
              <span>{remained}</span>
              <TenderItem key={tender.header} {...tender} />
            </div>
          );
        return <TenderItem key={tender.header} {...tender} />;
      }),
    );
  }, [activeTrader, remained]);

  return (
    <div className="app">
      <h1 className={styles.header}>{`Ход торгов ${header}`}</h1>
      <div className={styles.tenders}>{tenderMembers}</div>
    </div>
  );
};

export default Tender;
