/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_BRE8bGTY.mjs';
import { a as $$BlogPost, $ as $$BaseLayout } from './_tag__TjRmE8-A.mjs';

const $$Astro = createAstro("https://get-astro.vercel.app/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_Cl7kJoVM.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_BVnHA1Ya.mjs'),"./posts/post-3.md": () => import('./post-3_ipu441LF.mjs'),"./posts/post-4.md": () => import('./post-4_BPh5Jtkv.mjs')}), () => "../pages/posts/*.md");
  console.log(allPosts);
  const pageTitle = "My Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>My Astro Learning Blog</h1> <p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/pages/blog.astro", void 0);

const $$file = "/Users/uuam/Desktop/order_pos/astro-test/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
