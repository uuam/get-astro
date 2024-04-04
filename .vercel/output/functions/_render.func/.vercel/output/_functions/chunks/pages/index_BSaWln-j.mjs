/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_CriIIjsb.mjs';
import { $ as $$BaseLayout } from './_tag__Cgd0KWmy.mjs';
/* empty css                          */
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';

const $$Astro$1 = createAstro("https://get-astro.vercel.app/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Tag Index";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1_DmL7Gv4D.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2_BrQkcQyp.mjs'),"../posts/post-3.md": () => import('./post-3_DzErgwlr.mjs'),"../posts/post-4.md": () => import('./post-4_C-FZq3Kq.mjs')}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  console.log(tags);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a> </p>`)} </div> ` })} `;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/pages/tags/index.astro", void 0);

const $$file$1 = "/Users/uuam/Desktop/order_pos/astro-test/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "! Thank you for visiting!"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "New Greeting"
    })]
  });
}

const $$Astro = createAstro("https://get-astro.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>My awesome blog subtitle</h2> ${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hej", "Hallo", "Hola", "Habari"], "client:component-hydration": "load", "client:component-path": "/Users/uuam/Desktop/order_pos/astro-test/src/components/Greeting", "client:component-export": "default" })} ` })}`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/pages/index.astro", void 0);

const $$file = "/Users/uuam/Desktop/order_pos/astro-test/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
