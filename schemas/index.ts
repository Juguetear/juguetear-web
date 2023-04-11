import about from "schemas/about";
import accessibility_declaration from "schemas/accessibility-declaration";
import block from "schemas/block";
import characteristics from "schemas/characteristics";
import characteristics_list from "schemas/characteristics_list";
import collaborate from "schemas/collaborate";
import document from "schemas/document";
import documents from "schemas/documents";
import faq from "schemas/faq";
import homePage from "schemas/home-page";
import image from "schemas/image";
import link from "schemas/link";
import member from "schemas/member";
import layout from "schemas/pages/layout";
import toy from "schemas/toy";
import video from "schemas/video";
import relativeUrl from "./shared/relative-url";

const schemas = [
  /* Your types here! */
  layout,

  relativeUrl,

  about,
  accessibility_declaration,
  block,
  characteristics_list,
  characteristics,
  document,
  documents,
  faq,
  homePage,
  image,
  link,
  member,
  toy,
  video,
  collaborate,
];

export default schemas;
