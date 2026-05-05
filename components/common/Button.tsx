import Link from 'next/link';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  primary: 'bg-[#3182F6] text-white hover:bg-[#1b64da]',
  secondary: 'bg-[#F2F4F6] text-slate-700 hover:bg-[#e8ebee]'
};

export default function Button({ children, href, variant = 'primary' }: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${styles[variant]}`;
  if (href) {
    return <Link href={href} className={className}>{children}</Link>;
  }
  return <button className={className}>{children}</button>;
}
