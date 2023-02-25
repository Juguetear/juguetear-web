// TODO: Migrate schemas from './studio/schemas' to './schemas'
import image from "chemas/image";
import about from "schemas/about";
import accessibilityDeclaration from "schemas/accessibility-declaration";
import block from "schemas/block";
import characteristics from "schemas/characteristics";
import characteristics_list from "schemas/characteristics_list";
import document from "schemas/document";
import documents from "schemas/documents";
import faq from "schemas/faq";
import homePage from "schemas/home-page";
import member from "schemas/member";
import toy from "schemas/toy";
import video from "schemas/video";
import collaborate from "studio/schemas/collaborate";
import link from "studio/schemas/link";

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
