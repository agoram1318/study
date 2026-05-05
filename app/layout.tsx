import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '스터디 관리',
  description: '강사 스터디 관리 웹앱 프로토타입',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
