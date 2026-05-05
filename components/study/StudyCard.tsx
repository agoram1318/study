import { Study } from '@/types';
import StatusBadge from '@/components/common/StatusBadge';
import Button from '@/components/common/Button';

export default function StudyCard({ study }: { study: Study }) {
  return (
    <article className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-medium text-slate-500">{study.category}</p>
        <StatusBadge status={study.status} />
      </div>
      <h3 className="text-lg font-bold">{study.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{study.description}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
        <p>담당 강사: <span className="font-medium text-slate-800">{study.mentor}</span></p>
        <p>참여 인원: <span className="font-medium text-slate-800">{study.participantCount}명</span></p>
      </div>
      <div className="mt-5">
        <Button href={`/studies/${study.id}`} variant="secondary">스터디 보기</Button>
      </div>
    </article>
  );
}
