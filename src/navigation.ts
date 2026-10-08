import { getPermalink } from './utils/permalinks';
import { program } from './data/program';

export const headerData = {
  links: [
    { text: 'The Program', href: getPermalink('/#curriculum') },
    { text: 'Details', href: getPermalink('/#details') },
    { text: 'Your Educator', href: getPermalink('/#educator') },
    { text: 'FAQ', href: getPermalink('/#faq') },
    { text: 'Pricing', href: getPermalink('/#pricing') },
  ],
  actions: [
    { text: 'Register Now', href: getPermalink('/#register'), variant: 'primary' as const, 'data-open-register': '' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Program',
      links: [
        { text: 'Curriculum', href: getPermalink('/#curriculum') },
        { text: 'Dates & Location', href: getPermalink('/#details') },
        { text: 'Pricing', href: getPermalink('/#pricing') },
      ],
    },
    {
      title: 'Families',
      links: [
        { text: 'FAQ', href: getPermalink('/#faq') },
        { text: 'Your Educator', href: getPermalink('/#educator') },
        { text: 'Register', href: getPermalink('/#register') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: program.contactEmail, href: `mailto:${program.contactEmail}` },
        { text: program.contactPhone, href: `tel:${program.contactPhone.replace(/[^\d+]/g, '')}` },
        { text: program.city, href: program.mapUrl },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [{ ariaLabel: 'Email', icon: 'tabler:mail', href: `mailto:${program.contactEmail}` }],
  footNote: `© ${new Date().getFullYear()} Hearts in Action · Created &amp; facilitated by Rekha Mahbubani · ${program.city}`,
};
