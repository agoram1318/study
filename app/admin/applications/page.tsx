import PageHeader from '@/components/common/PageHeader';
import ApplicationTable from '@/components/admin/ApplicationTable';
import { applications } from '@/lib/mock-data';

export default function ApplicationsPage() {
  return (
    <section className="space-y-4">
      <PageHeader title="스터디 신청 관리" description="들어온 신청서를 확인하고 빠르게 상태를 관리해보세요." />
      <ApplicationTable items={applications} />
    </section>
  );
}
