import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Language',
  items: [
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'Java',
      level: 1,
    },
  ],
};
const framework: ISkill.Skill = {
  category: 'Framework',
  items: [
    {
      title: 'Pytorch',
      level: 3,
    },
    {
      title: 'Tensorflow',
      level: 3,
    },
    {
      title: 'BentoML',
      level: 3,
    },
    {
      title: 'Ray',
      level: 2,
    },
    {
      title: 'FastAPI',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Elasticsearch',
      level: 3,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 1,
    },
    {
      title: 'Oracle',
      level: 1,
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'Airflow',
      level: 2,
    },
    // {
    //   title: 'Kubernetes',
    //   level: 2,
    // },
    // {
    //   title: 'Kubeflow',
    //   level: 2,
    // },
    // {
    //   title: 'MLflow',
    //   level: 2,
    // },
    // {
    //   title: 'Seldon-core',
    //   level: 2,
    // },
    // {
    //   title: 'Prometheus & Grafana',
    //   level: 2,
    // },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Bitbucket',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Notion',
    },
    {
      title: 'IDEA',
    },
    {
      title: 'Jupyter',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, framework, infrastructure, database, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
