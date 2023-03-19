import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Tensorflow, PyTorch, Transformers 등을 사용하여 다양한 모델을 설계, 개발, 운영한 경험으로 유지 보수성이 높은 머신러닝 아키텍처와 디자인 패턴을 위해 고민하고 있습니다.',
    'Transliteration, Classification, Sentence-Similarity, Summarization 등 다양한 자연어 처리 태스크를 수행하였으며, 간단한 API 개발과 모델 서빙 및 배포 경험이 있습니다. \
    Elasticsearch를 이용해 검색 엔진을 구축해보는 등 텍스트와 관련된 모든 일을 즐기고 있습니다.',
    '오픈소스 프로젝트에 관심이 많고, 튜토리얼용 소스 코드를 공유하는 등의 다양한 방법으로 기여하기 위해 노력하고 있습니다. 이외에도 개인 프로젝트나 개발 커뮤니티 활동 등을 통해 다양한 개발 경험을 즐기고 있습니다.',
    '항상 최신 기술과 트렌드에 대한 관심을 가지고 있으며, 지속적으로 학습하고 발전해 나가고 있습니다. 능동적이고 적극적인 커뮤니케이션으로 문제 해결과 비즈니스 발전을 위해 뛰어듭니다. 이러한 점을 바탕으로 더 좋은 개발자로서 성장하기 위해 더 치열하게 학습하고, 경험하고, 노력하고 있습니다.',
  ],
  sign: 'Eunsoo Kang',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
