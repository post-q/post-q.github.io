import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Oferta',
      href: '/#oferta',
    },
    {
      text: 'Kontakt',
      href: '/#kontakt',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'PostQ.pl',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Oferta', href: '/#oferta' },
        { text: 'Kontakt', href: '/#kontakt' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    PostQ.pl © 2025
  `,
};
