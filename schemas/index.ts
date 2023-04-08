import aboutPage from "schemas/pages/about-page";
import accessibilityDeclarationPage from "schemas/pages/accessibility-declaration-page";
import collaboratePage from "schemas/pages/collaborate-page";
import faqPage from "schemas/pages/faq-page";
import homePage from "schemas/pages/home-page";

import content from "schemas/shared/content";
import image from "schemas/shared/img";
import link from "schemas/shared/link";
import video from "schemas/shared/video";

import characteristics from "schemas/characteristics";
import characteristics_list from "schemas/characteristics_list";
import doc from "schemas/doc";
import docsCategory from "schemas/docs-category";
import member from "schemas/member";
import toy from "schemas/toy";

const schemas = [
  /* Your types here! */
  aboutPage,
  accessibilityDeclarationPage,
  collaboratePage,
  faqPage,
  homePage,

  content,
  image,
  link,
  video,

  characteristics_list,
  characteristics,
  doc,
  docsCategory,
  member,
  toy,
];

export default schemas;
