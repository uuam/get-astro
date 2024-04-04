/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot } from '../astro_CriIIjsb.mjs';
/* empty css                           */

const $$Astro$7 = createAstro("https://get-astro.vercel.app/");
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span><span class="line"></span><span class="line"></span> </div>`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/components/Hamburger.astro", void 0);

const $$Astro$6 = createAstro("https://get-astro.vercel.app/");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> </div>`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/components/Navigation.astro", void 0);

const $$Astro$5 = createAstro("https://get-astro.vercel.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Navigation", $$Navigation, {})} ${renderComponent($$result, "Hamburger", $$Hamburger, {})} </nav> </header>`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro("https://get-astro.vercel.app/");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a> `;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/components/Social.astro", void 0);

const $$Astro$3 = createAstro("https://get-astro.vercel.app/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "astrodotbuild", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "withastro", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "astrodotbuild", "data-astro-cid-sz7xmlte": true })} </footer>`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://get-astro.vercel.app/");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro("https://get-astro.vercel.app/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://get-astro.vercel.app/");
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1_DmL7Gv4D.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2_BrQkcQyp.mjs'),"../posts/post-3.md": () => import('./post-3_DzErgwlr.mjs'),"../posts/post-4.md": () => import('./post-4_C-FZq3Kq.mjs')}), () => "../posts/*.md");
  const uniqueTags = [
    ...new Set(
      allPosts.map((post) => post.frontmatter.tags).flat()
    )
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Posts tagged with ${tag}</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/pages/tags/[tag].astro", void 0);

const $$file = "/Users/uuam/Desktop/order_pos/astro-test/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, _tag_ as _, $$BlogPost as a };
