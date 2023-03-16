import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '마크클라우드 (Markcloud)',
      position: 'SI팀 검색 및 자연어 처리 엔지니어',
      startedAt: '2021-10',
      descriptions: [
        'IP 스타트업 (15-25명, SI팀 8-10명)',
        '마크뷰 텍스트 검색 서비스 개발 및 운영 · 유지 보수',
        '마크뷰 영한 음차 변환기 개발',
        '마크통 변리사 추천 시스템 개발',
        '마크클라우드 브랜드 네이밍 생성 모델 개발',
        '레거시 청산 및 기존 비즈니스 로직 유지보수',
        '사용자 Needs에 맞는 검색 서비스 개선과 신규 비즈니스 로직 구현'
      ],
      skillKeywords: ['Python'],
    },
    {
      title: '버즈니 (Buzzni)',
      position: '신성장팀 백엔드 엔지니어 인턴',
      startedAt: '2021-02',
      endedAt: '2021-07',
      descriptions: [
        '커머스 스타트업 (80~90명, 신성장팀 4-5명)',
        '브랜드잇 백엔드 개발'
      ],
      skillKeywords: ['Python'],
    },
  ],
};

export default experience;
