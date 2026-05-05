interface StatusBadgeProps {
  status: string;
}

const toneMap: Record<string, string> = {
  모집중: 'bg-blue-50 text-blue-700',
  진행중: 'bg-emerald-50 text-emerald-700',
  마감: 'bg-slate-100 text-slate-600',
  예정: 'bg-amber-50 text-amber-700',
  진행완료: 'bg-slate-100 text-slate-700',
  신규: 'bg-blue-50 text-blue-700',
  검토중: 'bg-violet-50 text-violet-700',
  승인: 'bg-emerald-50 text-emerald-700',
  거절: 'bg-rose-50 text-rose-700',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${toneMap[status] ?? 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}
