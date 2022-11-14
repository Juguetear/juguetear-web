/// <reference types="@sanity/types/parts" />
// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import document from "./document";
import documents from "./documents";
import link from "./link";
import member from "./member";

// Toy related.
import lights from "./Toys/lights";
import movement from "./Toys/movement";
import sound from "./Toys/sound";
import switchInput from "./Toys/switchInput";
import toy from "./Toys/toy";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    document,
    documents,
    member,
    link,
    toy,
    movement,
    switchInput,
    lights,
    sound,
  ]),
});
