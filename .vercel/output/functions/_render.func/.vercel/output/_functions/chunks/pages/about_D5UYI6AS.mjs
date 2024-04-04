/* empty css                          */
import { c as createAstro, d as createComponent, i as defineStyleVars, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_CriIIjsb.mjs';
/* empty css                           */
import { $ as $$BaseLayout } from './_tag__Cgd0KWmy.mjs';
/* empty css                          */

const $$Astro = createAstro("https://get-astro.vercel.app/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Page";
  const identity = {
    firstName: "Sarah",
    country: "Canada",
    occupation: "Technical Writer",
    hobbies: ["photography", "birdwatching", "baseball"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  const finished = false;
  const skillColor = "navy";
  const fontWeight = "blod";
  const textCase = "uppercase";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, textCase }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${pageTitle}</h1><h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>... and my new Astro site!</h2><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
I am working through Astro's introductory tutorial. This is the second page
    on my website, and it's the first one I built myself!
</p><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
This site will update as I complete more of the tutorial, so keep checking
    back and see how my journey is going!
</p><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Here are a few facts about me:</p><ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}><li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My name is ${identity.firstName}.</li><li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
I live in ${identity.country} and I work as a ${identity.occupation}.
</li>${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`}</ul><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My skills are:</p><ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)}</ul>${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am happy to be learning Astro!</p>`}${finished }${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My goal is to finish in 3 days.</p>` }` })}`;
}, "/Users/uuam/Desktop/order_pos/astro-test/src/pages/about.astro", void 0);

const $$file = "/Users/uuam/Desktop/order_pos/astro-test/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
