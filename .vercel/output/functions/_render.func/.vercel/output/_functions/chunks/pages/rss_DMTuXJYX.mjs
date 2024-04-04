import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_Cl7kJoVM.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_BVnHA1Ya.mjs'),"./posts/post-3.md": () => import('./post-3_ipu441LF.mjs'),"./posts/post-4.md": () => import('./post-4_BPh5Jtkv.mjs')})),
    customData: `<language>en-us</language>`
  });
}

export { GET };
