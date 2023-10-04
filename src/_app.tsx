import { Inter, Noto_Sans_KR, Roboto } from 'next/font/google'; // 해당 폰트의 함수를 사용합니다.

const inter = Inter({ subsets: ['latin'] }); // 변수를 선언하고, 함수의 인자로 스타일을 지정합니다.

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const roboto = Roboto({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['100', '400', '700'],
  variable: '--roboto', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <main className={cls(notoSansKr.className, roboto.variable)}>
      {/* className을 통해 하위 컴포넌트에서 폰트를 사용합니다. */}
      <Component {...pageProps} />
    </main>
  );
}
