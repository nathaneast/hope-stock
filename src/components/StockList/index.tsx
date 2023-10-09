'use client';

import axios from 'axios';

import { useStockList } from './querys';

const StockList = () => {
  const { data: stockList = [] } = useStockList();

  return (
    <section>
      {stockList.map((item: any, index: number) => (
        <article key={index} className="flex">
          <div>이미지</div>

          <div>
            <h3>{item.name}</h3>
            <p>{item.stock} 주</p>
          </div>

          <p>{item.price} 원</p>
        </article>
      ))}
    </section>
  );
};

export default StockList;
