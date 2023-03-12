import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile_image.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume: Eunsoo Kang';
const description = "This is Eunsoo Kang's Resume. Thank you";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Eunsoo',
        lastName: 'Kang',
        username: 'eunsour',
        gender: 'male',
      },
    },
  },
};
