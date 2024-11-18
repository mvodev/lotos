import { FC, useEffect, useState } from 'react';

import { useTimer } from '../../hooks/useTimer';
import { tenders } from '../../tenders';
import styles from './TenderMembers.module.css';

const TenderMembers: FC = () => {
  const timer = useTimer(2);
  const { remained, expired, resetTimer } = timer;
  const [activeTrader, setAvtiveTrader] = useState(0);
  useEffect(() => {
    if (expired) {
      resetTimer(2);
      if (activeTrader + 1 > tenders.length - 1) {
        setAvtiveTrader(0);
      } else setAvtiveTrader(activeTrader + 1);
    }
  }, [expired, resetTimer, activeTrader]);
  return (
    <table className={styles.tenderMembers}>
      <tbody className={styles.tableBody}>
        <tr>
          <th className={styles.tableHeader} scope="row">
            Ход
          </th>
          {tenders.map((_, index) => {
            if (index === activeTrader)
              return (
                <td className={styles.activeCell} key={index}>
                  {remained}
                </td>
              );
            else return <td key={index}></td>;
          })}
        </tr>
        <tr className={styles.separator}>
          <th className={styles.tableHeader} scope="row">
            Параметры применения
          </th>
          {tenders.map((tender) => (
            <td key={tender.header} className={styles.cell}>
              {tender.header}
            </td>
          ))}
        </tr>
        <tr className={styles.coloredRow}>
          <th className={styles.tableSubHeader} scope="row">
            Наличие комплекса мероприятий,повышающих стандарты качества изготовления
          </th>
          {tenders.map((tender, index) => (
            <td className={styles.cell} key={tender.events + index}>
              {tender.events}
            </td>
          ))}
        </tr>
        <tr>
          <th className={styles.tableSubHeader} scope="row">
            Срок изготовления лота,дней
          </th>
          {tenders.map((tender, index) => (
            <td className={styles.cell} key={tender.productionTime + index}>
              {tender.productionTime}
            </td>
          ))}
        </tr>
        <tr className={styles.coloredRow}>
          <th className={styles.tableSubHeader} scope="row">
            Гарантийные обязательства,мес
          </th>
          {tenders.map((tender, index) => (
            <td className={styles.cell} key={tender.guarantee + index}>
              {tender.guarantee}
            </td>
          ))}
        </tr>
        <tr>
          <th className={styles.tableSubHeader} scope="row">
            Условия оплаты
          </th>
          {tenders.map((tender, index) => (
            <td className={styles.cell} key={tender.conditions + index}>
              {tender.conditions}
            </td>
          ))}
        </tr>
        <tr className={styles.coloredRow}>
          <th className={styles.tableSubHeader} scope="row">
            Стоимость изготовления лота
          </th>
          {tenders.map((tender, index) => (
            <td className={styles.cell} key={tender.price + index}>
              {tender.price}
            </td>
          ))}
        </tr>
        <tr>
          <th className={styles.tableSubHeader} scope="row">
            Действия
          </th>
          {tenders.map((tender, index) => (
            <td width={'200px'} className={styles.cell} key={tender.actions + index}>
              {tender.actions}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TenderMembers;
