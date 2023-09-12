import React from "react";
import { IFeaturedToysSection } from "types/home-page";
import Carousel from "components/Carousel/Carousel";
import { Card } from "components/Card/Card";
import { Link } from "components/Link/Link";

export const FeaturedToysSection = ({
  cta,
  description,
  title,
  toys,
}: IFeaturedToysSection) => {
  // TODO: #375 Corregir enlaces a juguetes individuales

  return (
    <section className="py-10">
      <div className="container text-center">
        <h2 className="mb-6 text-3xl font-bold md:mb-8">{title}</h2>
        <p className="mb-6 text-lg md:mb-8">{description}</p>

        <Carousel>
          {toys?.map((toy) => (
            <Card
              image={toy.images[0]}
              key={toy._id}
              title={toy.name}
              link={`/${toy.slug.current}`}
              available={toy.isAvailable}
              description={toy.shortDescription}
            />
          ))}
        </Carousel>
        <div className="mt-6">
          <Link href={cta.url} appearance="button">
            {cta.name}
          </Link>
        </div>
      </div>
    </section>
  );
};
