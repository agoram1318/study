import PageHeader from '@/components/common/PageHeader';
import MaterialList from '@/components/study/MaterialList';
import { studies } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default async function LessonDetailPage({ params }: { params: Promise<{ id: string; lessonId: string }> }) {
  const { id, lessonId } = await params;
  const study = studies.find((s) => s.id === id);
  const lesson = study?.lessons.find((l) => l.id === lessonId);

  if (!study || !lesson) return notFound();

  return (
    <section className="space-y-4">
      <PageHeader title={lesson.title} description={`${study.title} · ${lesson.date}`} />
      <div className="card p-5">
        <p className="text-sm text-slate-600">{lesson.summary}</p>
      </div>
      <MaterialList materials={lesson.materials} />
    </section>
  );
}
