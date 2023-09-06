import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '일기장',
  description: '그날의 감정을 기록해보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div>
          <Link href='/'>Main</Link>
          <Link href='/diary'>Diary</Link>
          <Link href='/new'>New</Link>
          <Link href='/edit'>Edit</Link>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
