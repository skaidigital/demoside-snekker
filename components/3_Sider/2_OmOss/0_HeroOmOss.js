import {
  HeroContainer,
  HeroContainerUtenPadding,
  Layout,
  SectionContainer,
} from "../../1_Små/Base";
import { Bilde } from "../../1_Små/Bilde";

export const HeroOmOss = () => {
  return (
    <HeroContainer id="hero-display" c="z-1 h-340 relative bgImage">
      <Bilde
        c="object-cover"
        src="demoside-snekker/thayran-melo-iCnKeuwwPPw-unsplash_fertzm.jpg"
        alt="Snekre som jobber på en garasjevegg"
        layout="fill"
      />

      <Layout>
        <div class="z-1 relative max-w-740 flex self-center mx-auto ">
          <h1 className="text-h2 lg:text-h1 text-hvit text-center">
            VI ER OSLOS MEST ANERKJENTE SNEKRE
          </h1>
        </div>
      </Layout>
    </HeroContainer>
  );
};
