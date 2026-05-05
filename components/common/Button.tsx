import Link from 'next/link';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  primary: 'bg-point text-white hover:bg-blue-600',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
};

export default function Button({ children, href, variant = 'primary' }: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${styles[variant]}`;
  if (href) {
    return <Link href={href} className={className}>{children}</Link>;
  }
  return <button className={className}>{children}</button>;
}
