import PageHeader from '@/components/common/PageHeader';
import AdminStatCard from '@/components/admin/AdminStatCard';
import { applications, studies } from '@/lib/mock-data';

export default function AdminPage() {
  return (
    <section className="space-y-4">
      <PageHeader title="관리자 대시보드" description="운영 현황을 빠르게 확인하고 필요한 작업을 이어가세요." />
      <div className="grid gap-4 sm:grid-cols-3">
        <AdminStatCard label="전체 스터디" value={`${studies.length}개`} helper="이번 달 신규 2개" />
        <AdminStatCard label="진행 중 스터디" value={`${studies.filter((s) => s.status === '진행중').length}개`} helper="안정적으로 운영 중" />
        <AdminStatCard label="신청서" value={`${applications.length}건`} helper="검토 대기 포함" />
      </div>
    </section>
  );
}
