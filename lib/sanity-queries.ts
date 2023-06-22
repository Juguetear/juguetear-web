import { groq } from "next-sanity";

const sanityImageProjection = groq`{
  ...,
  'placeholder': asset -> metadata.lqip
}`;

export const homePageQuery = groq`
  *[_type == 'homePage'][0] {
    ...,
    heroSection {
      ...,
      photo ${sanityImageProjection},
    },
    twoImagesSection {
      ...,
      photos[] ${sanityImageProjection},
    },
    featuredToysSection {
      ...,
      toys[] -> {
        ...,
        images[] -> ${sanityImageProjection},
        characteristics[] -> {
          ...,
          category->
        }
      }
    },
    cooperateSection {
      ...,
      blocks[] {
        ...,
        image ${sanityImageProjection},
      }
    }
  }
`;
