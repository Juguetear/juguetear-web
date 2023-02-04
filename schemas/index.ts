// TODO: Migrate schemas from './studio/schemas' to './schemas'
import accessibility_declaration from "schemas/accessibility-declaration";
import characteristics_list from "schemas/characteristics_list";
import document from "schemas/document";
import homePage from "schemas/home-page";
import about from "studio/schemas/about";
import block from "studio/schemas/block";
import characteristics from "studio/schemas/characteristics";
import collaborate from "studio/schemas/collaborate";
import documents from "studio/schemas/documents";
import faq from "studio/schemas/faq";
import image from "studio/schemas/image";
import link from "studio/schemas/link";
import member from "studio/schemas/member";
import toy from "studio/schemas/toy";
import video from "studio/schemas/video";

const schemas = [
  /* Your types here! */
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
