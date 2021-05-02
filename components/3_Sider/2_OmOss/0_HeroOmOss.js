import {
  HeroContainer,
  HeroContainerUtenPadding,
  Layout,
  SectionContainer,
} from "../../1_Små/Base";
import { Bilde } from "../../1_Små/Bilde";

export const HeroOmOss = () => {
  return (
    <HeroContainer id="hero-display" c="z-1 h-150 relative bgImage">
      <Bilde
        c="object-cover"
        src="demoside-snekker/thayran-melo-iCnKeuwwPPw-unsplash_fertzm.jpg"
        alt="Snekre som jobber på en garasjevegg"
        layout="fill"
      />

      <Layout>
        <div class="z-1 relative">
          <h1 className="text-h1 text-hvit text-center max-w-520">
            VI ER OSLOS MEST ANERKJENTE SNEKRE
          </h1>
        </div>
      </Layout>
    </HeroContainer>
  );
};
