import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Tender from './Tender.tsx';
import './index.module.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tender header="Тестовые торги на аппарат Лотос №2033564" />
  </StrictMode>,
);
