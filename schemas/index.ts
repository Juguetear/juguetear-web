// TODO: Migrate schemas from './studio/schemas' to './schemas'
import characteristics_list from "schemas/characteristics_list";
import document from "schemas/document";
import about from "studio/schemas/about";
import accessibilityDeclaration from "studio/schemas/accessibility-declaration";
import block from "studio/schemas/block";
import characteristics from "studio/schemas/characteristics";
import collaborate from "studio/schemas/collaborate";
import documents from "studio/schemas/documents";
import faq from "studio/schemas/faq";
import homePage from "studio/schemas/home-page";
import image from "studio/schemas/image";
import link from "studio/schemas/link";
import member from "studio/schemas/member";
import toy from "studio/schemas/toy";
import video from "studio/schemas/video";

const schemas = [
  /* Your types here! */
  about,
  accessibilityDeclaration,
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
