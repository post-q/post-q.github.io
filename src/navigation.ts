import { getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: '/',
    },
    {
      text: 'Oferta',
      href: '/offer',
    },
    {
      text: 'Kontakt',
      href: '/offer#kontakt',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'PostQ.pl',
      links: [
        { text: 'Blog', href: '/' },
        { text: 'Oferta', href: '/offer' },
        { text: 'Kontakt', href: '/offer#kontakt' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    PostQ.pl © 2025
  `,
};
