export const PROFILE = {
  name: 'Kristiyan Velkov',
  avatar:
    'https://media.licdn.com/dms/image/v2/D4D03AQF05_bHXKC6AQ/profile-displayphoto-crop_800_800/B4DZref6PfIMAI-/0/1764669500249?e=1767830400&v=beta&t=5AnUWqqKduOqVEkDLo9wOze4rE5FtkPOpNalcuxQZ5Y',
  bio: 'Dedicated to teaching and mentoring developers worldwide, making complex technologies accessible and practical for everyone.',
} as const;

export const BADGES = [
  {
    id: 'docker',
    label: 'Docker Captain',
    icon: 'docker',
  },
  {
    id: 'author',
    label: 'Author',
    icon: 'book',
  },
  {
    id: 'contributor',
    label: 'Speaker & Open Source Contributor',
    icon: 'check',
  },
] as const;

export const EXPERTISE_TAGS = [
  'React.js',
  'Next.js',
  'Angular',
  'Vue.js',
  'TypeScript',
  'Docker',
  'Kubernetes',
  'Security',
  'CI/CD',
] as const;


