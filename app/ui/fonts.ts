import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
//인터폰트 없으면 다음으로 로드할 폰트는 라틴

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
