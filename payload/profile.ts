import { faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile_image.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '강은수',
    small: '(eunsour)',
  },
  contact: [
    {
      title: 'me@eunsour.dev',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/eunsour',
      link: 'https://github.com/eunsour',
      icon: faGithub,
    },
    {
      link: 'https:/blog.eunsour.dev',
      icon: faRss,
    },
    {
      title: 'https://www.fb.com/95kes',
      link: 'https://www.fb.com/95kes',
      // icon: faRss,
      icon: faFacebook,
    },
  ],
  notice: {
    title: '휴대전화나 페이스북 메시지 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
