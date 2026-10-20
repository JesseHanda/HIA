import { getPermalink } from './utils/permalinks';
import { program, educator } from './data/program';

export const headerData = {
  links: [
    { text: 'What CHALLO Means', href: getPermalink('/#challo') },
    { text: 'The Program', href: getPermalink('/#outcomes') },
    { text: 'Eight Weeks', href: getPermalink('/#curriculum') },
    { text: 'Details', href: getPermalink('/#details') },
    { text: 'Your Educator', href: getPermalink('/#educator') },
    { text: 'FAQ', href: getPermalink('/#faq') },
  ],
  actions: [
    {
      text: 'Enquire Now',
      href: getPermalink('/#upcoming'),
      variant: 'primary' as const,
      'data-enquire': 'parent',
    },
  ],
};

const contactLinks = [
  ...(program.contactEmail ? [{ text: program.contactEmail, href: `mailto:${program.contactEmail}` }] : []),
  ...(program.contactPhone
    ? [{ text: program.contactPhone, href: `tel:${program.contactPhone.replace(/[^\d+]/g, '')}` }]
    : []),
  { text: program.city, href: program.mapUrl },
];

export const footerData = {
  tagline: program.tagline,
  links: [
    {
      title: 'Program',
      links: [
        { text: 'What CHALLO Means', href: getPermalink('/#challo') },
        { text: 'Eight-Week Journey', href: getPermalink('/#curriculum') },
        { text: 'Upcoming Programs', href: getPermalink('/#upcoming') },
      ],
    },
    {
      title: 'Enquire',
      links: [
        { text: 'For Schools', href: getPermalink('/#upcoming'), 'data-enquire': 'school' },
        { text: 'For Families', href: getPermalink('/#upcoming'), 'data-enquire': 'parent' },
        { text: 'FAQ', href: getPermalink('/#faq') },
      ],
    },
    {
      title: 'Contact',
      links: contactLinks,
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: program.contactEmail
    ? [{ ariaLabel: 'Email', icon: 'tabler:mail', href: `mailto:${program.contactEmail}` }]
    : [],
  footNote: `© ${new Date().getFullYear()} CHALLO Kids Club · Created &amp; facilitated by ${educator.name} · ${program.city}`,
};
