import PageHeader from '@/components/common/PageHeader';
import LessonList from '@/components/study/LessonList';
import { studies } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default async function StudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = studies.find((s) => s.id === id);

  if (!study) return notFound();

  return (
    <section className="space-y-4">
      <PageHeader title={study.title} description={`${study.mentor} · 다음 수업 ${study.nextLesson}`} />
      <div className="card p-5">
        <p className="text-sm text-slate-600">{study.description}</p>
      </div>
      <LessonList lessons={study.lessons} studyId={study.id} />
    </section>
  );
}
