// TODO: Migrate schemas from './studio/schemas' to './schemas'
import about from "schemas/about";
import accessibility_declaration from "schemas/accessibility-declaration";
import block from "schemas/block";
import characteristics from "schemas/characteristics";
import characteristics_list from "schemas/characteristics_list";
import document from "schemas/document";
import documents from "schemas/documents";
import faq from "schemas/faq";
import homePage from "schemas/home-page";
import image from "schemas/image";
import link from "schemas/link";
import member from "schemas/member";
import toy from "schemas/toy";
import collaborate from "studio/schemas/collaborate";
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
