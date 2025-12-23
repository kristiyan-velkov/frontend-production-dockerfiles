/**
 * Books Constants
 * Update these values to change the books displayed on the page
 */

export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  buyUrl: string;
  isAvailable: boolean;
}

export const PROMO = {
  enabled: true,
  discountPercent: 20,
  code: 'PROMO20',
} as const;

export const BOOKS: Book[] = [
  {
    id: 'docker-react',
    title: 'Docker for React.js Developers',
    description:
      'Master containerization for React applications. Learn Docker fundamentals, create optimized Dockerfiles, multi-stage builds, and deploy your front-end apps like a pro.',
    coverImage:
      'https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1jarmj5tr159d16lcihm18uuieh17.png',
    buyUrl: 'https://kristiyanvelkov.com/b/docker-for-reactjs-developers',
    isAvailable: true,
  },
  {
    id: 'react-interviews-senior',
    title: 'Mastering React.js Interviews: For Middle/Senior Developers',
    description:
      'Advanced interview preparation for experienced developers. Performance optimization, architecture patterns, testing strategies, and real-world scenarios.',
    coverImage:
      'https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1j7k6samb1bpm1pifno11vsc8e415.png',
    buyUrl: 'https://kristiyanvelkov.com/b/react-js-interviews',
    isAvailable: true,
  },
  {
    id: 'react-interviews-beginner',
    title: 'Mastering React.js Interviews: From 0 to Hero',
    description:
      'Comprehensive interview preparation guide for beginners to intermediate React developers. Cover hooks, state management, and essential concepts.',
    coverImage:
      'https://payhip.com/cdn-cgi/image/format=auto,width=1500/https://pe56d.s3.amazonaws.com/o_1j7k6suv6ts43011in1nmb1fdf15.jpg',
    buyUrl: 'https://kristiyanvelkov.com/b/masteringreactjsinterviews',
    isAvailable: true,
  },
  {
    id: 'typescript-utility',
    title: 'Mastering TypeScript Core Utility Types',
    description:
      "Deep dive into TypeScript's powerful type system. Learn to leverage built-in utility types like Partial, Required, Pick, Omit, and create your own custom types.",
    coverImage:
      'https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1iol4gsj119071chj1r5m1aht1m6810.jpg',
    buyUrl: 'https://kristiyanvelkov.com/b/ucPLU',
    isAvailable: true,
  },
];
