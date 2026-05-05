import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '스터디 관리',
  description: '강사 스터디 관리 웹앱 프로토타입',
};

const navItems = [
  { href: '/dashboard', label: '대시보드' },
  { href: '/admin', label: '관리자' },
  { href: '/admin/applications', label: '신청서' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="mb-6 flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-slate-100">
            <Link href="/dashboard" className="text-base font-bold text-slate-800">스터디룸</Link>
            <nav className="flex items-center gap-2 text-sm">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
