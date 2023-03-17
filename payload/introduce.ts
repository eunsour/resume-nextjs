import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Tensorflow, PyTorch, Transformers 등을 사용하여 다양한 모델을 설계, 개발, 운영한 경험으로 유지 보수성이 높은 머신러닝 아키텍처와 디자인 패턴을 위해 고민하고 있습니다.',
    'classification, sentence-similarity, summarization, transliteration 등 다양한 자연어 처리 태스크 수행 경험이 있습니다.',
    '오픈소스 프로젝트에 관심이 많고, 튜토리얼 용 소스코드를 공유하는 등 다양한 방법으로 기여하기 위해 노력하고 있습니다.',
    '항상 최신 기술과 트렌드에 대한 관심을 가지고 있으며, 지속적으로 학습하고 발전해 나가고 있습니다.',
    '또한, 팀원과의 원활한 커뮤니케이션과 협업을 통해 프로젝트를 성공적으로 완수할 수 있는 능력을 가지고 있습니다.',
  ],
  sign: 'Eunsoo Kang',
  // latestUpdated: '2023-03-12',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
