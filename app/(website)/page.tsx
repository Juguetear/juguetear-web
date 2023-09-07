import { AboutProjectSection } from "components/AboutProjectSection/AboutProjectSection";
import { CooperateSection } from "components/CooperateSection/CooperateSection";
import { FeaturedToysSection } from "components/FeaturedToysSection/FeaturedToysSection";
import { Hero } from "components/Hero/Hero";
import { client } from "lib/sanity-client";
import { homePageQuery } from "lib/sanity-queries";
import { HomePage } from "types/home-page";

async function Home() {
  const {
    heroSection,
    twoImagesSection,
    featuredToysSection,
    cooperateSection,
  } = await client.fetch<HomePage>(homePageQuery);

  return (
    <div className="space-y-20">
      <Hero {...heroSection} />
      <AboutProjectSection {...twoImagesSection} />
      <FeaturedToysSection {...featuredToysSection} />
      <CooperateSection {...cooperateSection} />
    </div>
  );
}

export default Home;
