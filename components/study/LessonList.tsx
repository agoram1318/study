import Link from 'next/link';
import StatusBadge from '@/components/common/StatusBadge';
import { Lesson, Study } from '@/types';

export default function LessonList({ lessons, studyId }: { lessons: Lesson[]; studyId: Study['id'] }) {
  return (
    <div className="card p-5">
      <h2 className="mb-4 text-lg font-bold">회차 목록</h2>
      <ul className="space-y-3">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="rounded-xl border border-slate-100 p-4">
            <div className="flex items-center justify-between gap-2">
              <Link href={`/studies/${studyId}/lessons/${lesson.id}`} className="font-semibold text-slate-800 hover:text-point">
                {lesson.title}
              </Link>
              <StatusBadge status={lesson.status} />
            </div>
            <p className="mt-1 text-sm text-slate-600">{lesson.summary}</p>
            <p className="mt-2 text-xs text-slate-500">일정: {lesson.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
