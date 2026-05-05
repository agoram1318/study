import Button from '@/components/common/Button';
import StatusBadge from '@/components/common/StatusBadge';

const studyCards = [
  {
    id: 'react-ui',
    title: '실전 React UI 스터디',
    status: '진행중',
    progress: 72,
    recentUpload: '3회차 피드백 영상 업로드 완료',
  },
  {
    id: 'python-mentor',
    title: '파이썬 문제해결 멘토링',
    status: '예정',
    progress: 24,
    recentUpload: '오리엔테이션 자료가 올라왔어요',
  },
  {
    id: 'portfolio-lab',
    title: '취업 포트폴리오 클리닉',
    status: '종료',
    progress: 100,
    recentUpload: '최종 회고 노트가 정리되었어요',
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-[1180px] space-y-5 bg-[#F7F8FA] px-1 pb-10 pt-2">
      <header className="flex items-center justify-between rounded-[24px] border border-[#E5E8EB] bg-white px-6 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
        <p className="text-[18px] font-bold text-slate-900">스터디룸</p>
        <div className="flex gap-2 text-sm">
          <Button href="/dashboard" variant="secondary">대시보드</Button>
          <Button href="/admin" variant="secondary">관리자</Button>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <article className="rounded-[28px] border border-[#E5E8EB] bg-white px-8 py-9 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
          <p className="text-sm font-semibold text-[#3182F6]">Teacher Home</p>
          <h1 className="mt-3 text-[40px] font-extrabold leading-tight tracking-[-0.02em] text-slate-900">
            안녕하세요,
            <br />
            오늘도 좋은 수업을 만들어봐요
          </h1>
          <p className="mt-4 max-w-xl text-[15px] text-slate-600">
            오늘 일정, 학습 자료 업로드, 수강생 피드백까지 한 번에 확인할 수 있도록 준비해두었어요.
          </p>
        </article>

        <article className="rounded-[28px] border border-[#1e293b] bg-slate-900 px-7 py-7 text-white shadow-[0_10px_28px_rgba(15,23,42,0.28)]">
          <p className="text-sm font-semibold text-slate-300">오늘 확인할 항목</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-100">
            <li className="rounded-xl bg-white/10 px-3 py-3">• 2회차 과제 제출 현황 점검</li>
            <li className="rounded-xl bg-white/10 px-3 py-3">• 신규 신청서 2건 확인</li>
            <li className="rounded-xl bg-white/10 px-3 py-3">• 저녁 8시 라이브 강의 리마인드</li>
          </ul>
          <div className="mt-5">
            <Button href="/admin/applications">지금 확인하기</Button>
          </div>
        </article>
      </section>

      <section className="rounded-[24px] border border-[#d8e8ff] bg-[#EAF3FF] px-7 py-6 shadow-[0_8px_20px_rgba(49,130,246,0.14)]">
        <p className="text-sm font-semibold text-[#1d4ed8]">최근 업데이트</p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[20px] font-bold text-slate-900">3회차 피드백 영상이 올라왔어요</p>
          <Button href="/studies/react-ui/lessons/2">바로 보기</Button>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xl font-bold text-slate-900">내 스터디</h2>
          <p className="text-sm text-slate-500">총 3개</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {studyCards.map((study) => (
            <article key={study.id} className="rounded-[24px] border border-[#E5E8EB] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <div className="flex items-center justify-between">
                <h3 className="text-[17px] font-bold text-slate-900">{study.title}</h3>
                <StatusBadge status={study.status} />
              </div>
              <div className="mt-5">
                <div className="mb-2 flex justify-between text-xs text-slate-500">
                  <span>진행률</span>
                  <span>{study.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#F2F4F6]">
                  <div className="h-2 rounded-full bg-[#3182F6]" style={{ width: `${study.progress}%` }} />
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">최근 업로드 · {study.recentUpload}</p>
              <div className="mt-5 flex gap-2">
                <Button href={`/studies/${study.id}`}>상세 보기</Button>
                <Button href={`/studies/${study.id}`} variant="secondary">회차 관리</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
