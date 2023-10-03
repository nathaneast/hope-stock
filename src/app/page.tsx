import { Metadata } from 'next';
import { Roboto, Noto_Sans_KR } from 'next/font/google'; // Roboto와 한글 NotoSans를 사용합니다.
import { Inter } from 'next/font/google';

import StockList from './components/StockList';

export const metadata: Metadata = {
  title: 'hoep-stock',
};

export default function Home() {
  return (
    <main>
      <section>
        <h2>보유 주식</h2>
        <p>mock원</p>
        <span>+ mock</span>
      </section>

      {/* list */}
      <StockList />
    </main>
  );
}
