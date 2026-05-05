import PageHeader from '@/components/common/PageHeader';
import StudyCard from '@/components/study/StudyCard';
import { studies } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <section>
      <PageHeader title="안녕하세요, 오늘도 좋은 수업 만들어요" description="진행 중인 스터디와 다음 일정을 한 번에 확인해보세요." />
      <div className="grid gap-4 sm:grid-cols-2">
        {studies.map((study) => <StudyCard key={study.id} study={study} />)}
      </div>
    </section>
  );
}
