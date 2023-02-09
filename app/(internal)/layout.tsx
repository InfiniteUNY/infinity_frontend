import { Poppins } from '@next/font/google';
import { ReactNode } from 'react';
import '@/presentation/styles/globals.css';

type Props = {
  children: ReactNode;
};

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function InternalLayout({ children }: Props) {
  return (
    <html lang="id-ID" className={poppins.variable}>
      <head />
      <body>{children}</body>
    </html>
  );
}
