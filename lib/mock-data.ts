import { Application, Study } from '@/types';

export const studies: Study[] = [
  {
    id: 'react-ui',
    title: '실전 React UI 스터디',
    mentor: '김지훈 강사',
    category: '프론트엔드',
    status: '진행중',
    participantCount: 18,
    nextLesson: '2026-05-10',
    description: '컴포넌트 설계부터 협업 패턴까지, 실무형 UI를 함께 완성해요.',
    lessons: [
      {
        id: '1',
        title: '1회차 · 설계의 시작',
        summary: '요구사항을 UI 구조로 바꾸는 흐름을 연습합니다.',
        date: '2026-04-28',
        status: '진행완료',
        materials: [
          { id: 'm1', title: '수업 노트', type: '문서' },
          { id: 'm2', title: '피그마 링크', type: '링크', url: 'https://figma.com' },
        ],
      },
      {
        id: '2',
        title: '2회차 · 카드 UI 패턴',
        summary: '카드형 레이아웃과 반응형 규칙을 만들어봅니다.',
        date: '2026-05-10',
        status: '예정',
        materials: [{ id: 'm3', title: '사전 과제', type: '과제' }],
      },
    ],
  },
  {
    id: 'python-mentor',
    title: '파이썬 문제해결 멘토링',
    mentor: '박서연 강사',
    category: '알고리즘',
    status: '모집중',
    participantCount: 9,
    nextLesson: '2026-05-14',
    description: '매주 문제를 풀고 코드 리뷰를 통해 사고력을 넓혀요.',
    lessons: [
      {
        id: '1',
        title: '1회차 · 자료구조 감각',
        summary: '리스트/딕셔너리 활용 패턴을 정리해요.',
        date: '2026-05-14',
        status: '예정',
        materials: [{ id: 'm4', title: '예열 문제 세트', type: '과제' }],
      },
    ],
  },
];

export const applications: Application[] = [
  {
    id: 'ap-101',
    applicantName: '이수민',
    studyTitle: '실전 React UI 스터디',
    submittedAt: '2026-05-03',
    status: '신규',
    message: '현업에서 디자인 시스템 구축을 맡고 있어 꼭 참여하고 싶어요!',
  },
  {
    id: 'ap-102',
    applicantName: '최민재',
    studyTitle: '파이썬 문제해결 멘토링',
    submittedAt: '2026-05-02',
    status: '검토중',
    message: '코딩테스트 준비 중인데 꾸준히 학습하고 싶습니다.',
  },
];
