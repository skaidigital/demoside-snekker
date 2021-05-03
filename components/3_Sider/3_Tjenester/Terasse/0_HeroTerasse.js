import { HeroContainer, Layout } from "../../../1_Små/Base";
import { Bilde } from "../../../1_Små/Bilde";

export const HeroTerasse = () => {
  return (
    <HeroContainer id="hero-display" c="z-1 h-340 relative bgImage">
      <Bilde
        c="object-cover"
        src="demoside-snekker/arcwind--OKp-rhSWE4-unsplash_dbidhs.jpg"
        alt="Nydelig renovert terasse med mye utemøbler"
        layout="fill"
      />

      <Layout>
        <div class="z-1 relative max-w-740 flex self-center mx-auto ">
          <h1 className="text-h1 text-hvit text-center">
            VI BYGGER DIN DRØMMETERASSE
          </h1>
        </div>
      </Layout>
    </HeroContainer>
  );
};
