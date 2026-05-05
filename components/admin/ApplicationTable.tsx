import { Application } from '@/types';
import StatusBadge from '@/components/common/StatusBadge';

export default function ApplicationTable({ items }: { items: Application[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3">이름</th>
              <th className="px-4 py-3">스터디</th>
              <th className="px-4 py-3">신청일</th>
              <th className="px-4 py-3">상태</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{item.applicantName}</td>
                <td className="px-4 py-3">{item.studyTitle}</td>
                <td className="px-4 py-3 text-slate-600">{item.submittedAt}</td>
                <td className="px-4 py-3"><StatusBadge status={item.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
