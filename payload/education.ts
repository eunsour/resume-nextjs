import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '동의대학교',
      subTitle: 'Computer Engineering Graduated (GPA: 3.26/4.5)',
      startedAt: '2014-03',
      endedAt: '2020-02',
    },
    {
      title: '부산 용인고등학교',
      subTitle: 'Graduated',
      startedAt: '2011-03',
      endedAt: '2014-02',
    },
  ],
};

export default education;
