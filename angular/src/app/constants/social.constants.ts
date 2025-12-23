/**
 * Social Links Constants
 * Update these values to change the social links displayed on the page
 */

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'website',
    label: 'Website',
    url: 'https://kristiyanvelkov.com',
    icon: 'globe',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/kristiyanvelkov',
    icon: 'linkedin',
  },
  {
    id: 'twitter',
    label: 'X / Twitter',
    url: 'https://x.com/krisvelkov',
    icon: 'twitter',
  },
  {
    id: 'medium',
    label: 'Medium',
    url: 'https://medium.com/@kristiyanvelkov',
    icon: 'medium',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/kristiyan-velkov',
    icon: 'github',
  },
];
