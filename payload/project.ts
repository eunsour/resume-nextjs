import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '마크클라우드 브랜드 네이밍 생성 모델 개발',
      startedAt: '2022-12',
      endedAt: '2023-03',
      where: '마크클라우드 (Markcloud)',
      descriptions: [
        { content: 'LSTM 및 Summarization 모델 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '120만 개의 명사 위주의 영단어 데이터로 LSTM 모델 개발 및 onnx 변환' },
            { content: '사용자가 입력한 영단어에서 접두사, 접미사를 기반으로 브랜드 이름 생성' },
            { content: '각 회사 홈페이지의 description 데이터를 수집하여 summarization 모델 개발' },
            { content: '사용자가 입력한 비즈니스 또는 제품에 대한 짧은 문장을 기반으로 브랜드 이름 요약 및 추천' },
          ]
        },
        { content: 'Ray Tune을 이용하여 하이퍼파라미터 튜닝' },
        { content: 'BentoML을 이용하여 모델 서빙' }
      ],
    },
    {
      title: '마크통 변리사 추천 시스템 개발',
      startedAt: '2022-06',
      endedAt: '2022-09',
      where: '마크클라우드 (Markcloud)',
      descriptions: [
        { content: '사용자가 출원하려는 특허와 유사한 특허를 출원한 변리사를 추천해주기 위한 문장 유사도 모델 개발' },
        { content: '학습 데이터 생성을 위해 약 400만 개의 특허 데이터 이용',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'nlpaug 라이브러리와 한국어로 사전 학습된 BERT 모델을 이용하여 기존의 특허 데이터와 유사한 문장 하나를 추가로 생성' },
            { content: 'Word2Vec, FastText 등 다양한 토크나이징 실험을 통해 2개의 문장에 대한 유사도 레이블 생성' },
          ],
        },
        {
          content: "Sentence Similarity 모델 학습",
          weight: "MEDIUM",
          descriptions: [
            { content: '먼저 KLUE-NLI 데이터로 모델 파인 튜닝 진행' },
            { content: 'KLUE-NLI로 학습된 모델에 위 특허 데이터로 STS 학습 수행' },
            { content: 'Sentence Transformers 라이브러리를 이용하여 모델 개발' },
            { content: 'KLUE-STS 데이터를 검증 데이터로 활용' },
          ]
        },
        { content: 'Optuna를 이용하여 하이퍼파라미터 튜닝' },
        { content: 'BentoML을 이용하여 모델 서빙' },
      ],
    },
    {
      title: '마크뷰 영한 음차 변환기 개발',
      startedAt: '2022-03',
      endedAt: '2022-06',
      where: '마크클라우드 (Markcloud)',
      descriptions: [
        { content: '마크뷰 텍스트 검색 성능 개선을 위한 음차 변환 모델 개발 (e.g. transformer → 트랜스포머)' },
        { content: '다국어 모델을 활용하여 파인 튜닝 및 앙상블 적용' },
        { content: '영어로 된 80만 개의 상표 데이터 음차 변환 및 검색 서비스에 적용' },
        { content: '리다이렉트 정보를 이용하여 음차 변환 결과의 품질을 정량적으로 측정' },
        { content: '정성적 평가 위한 검수 툴 개발' }
      ],
    },
    {
      title: '마크뷰 텍스트 검색 서비스 개발 및 운영 / 유지 보수',
      startedAt: '2021-10',
      where: '마크클라우드 (Markcloud)',
      descriptions: [
        { content: '상표 텍스트 검색 엔진 구축',
          weight: 'MEDIUM',
          descriptions: [  
            { content: 'Elasticsearch를 이용하여 상표의 [일반 검색, 유사 문자 검색, 유사 발음 검색] 구현'}, 
            { content: 'ELK Stack 구축 및 싱글 노드, 멀티 노드 클러스터 개발 및 운영' },
            { content: 'beats extension들을 이용하여 검색 · 시스템 로그 수집' },
            { content: '검색 서비스 개선을 위한 통합 검색 필드 개발 및 정렬 기능 개선' },
            { content: '논문을 바탕으로 유사 발음 검색을 위한 커스텀 플러그인 개발' },
            { content: '부가적으로 로마자, 자모화, 음차 변환 등 다양한 방법 시도' },
            { content: '동의어 사전 관리' },
          ]
        },
        { content: '검색 서비스용 쿼리 빌더 API 개발 및 운영' },
        { content: 'Airflow를 이용하여 데이터 수집 및 업데이트 자동화 파이프라인 개발 및 운영' },
      ],
    },
    {
      title: '브랜드잇 백엔드 개발',
      startedAt: '2021-02',
      endedAt: '2021-07',
      where: '버즈니 (Buzzni)',
      descriptions: [
        { content: '3대 백화점의 브랜드 별 입점 수를 기반으로 수집 대상 브랜드 선정' },
        { content: 'scrapy, requests 등을 이용하여 약 70여 개의 브랜드 데이터 수집' },
        { content: 'Airflow, Redash, Jira 등을 통해 품절 여부 등의 이슈 파악 및 유지 보수' },
        { content: '이후 block이 자주 일어나는 해외 브랜드들 대상으로 Playwright로 수집 방법 변경' },
      ],
    },
  ],
};

export default project;
