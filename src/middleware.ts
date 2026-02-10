import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Redirect /blog to /
  if (url.pathname === '/blog' || url.pathname === '/blog/') {
    return context.redirect('/', 301);
  }

  // Redirect /blog/[slug] to /[slug]
  if (url.pathname.startsWith('/blog/')) {
    const newPath = url.pathname.replace('/blog/', '/');
    return context.redirect(newPath + url.search + url.hash, 301);
  }

  return next();
});
