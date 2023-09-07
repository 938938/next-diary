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
  const date = new Date();

  return (
    <html>
      <body>
        <header>
          <p>{date.toLocaleDateString()}</p>
          <Link href='/'>메인으로 가기</Link>
          <Link href='/new'>새 일기 쓰기</Link>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
