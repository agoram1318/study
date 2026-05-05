export type StudyStatus = '모집중' | '진행중' | '마감';
export type ApplicationStatus = '신규' | '검토중' | '승인' | '거절';

export interface Material {
  id: string;
  title: string;
  type: '문서' | '링크' | '과제';
  url?: string;
}

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  date: string;
  status: '예정' | '진행완료';
  materials: Material[];
}

export interface Study {
  id: string;
  title: string;
  mentor: string;
  category: string;
  status: StudyStatus;
  participantCount: number;
  nextLesson: string;
  description: string;
  lessons: Lesson[];
}

export interface Application {
  id: string;
  applicantName: string;
  studyTitle: string;
  submittedAt: string;
  status: ApplicationStatus;
  message: string;
}
