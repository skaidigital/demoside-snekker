import { HeroContainer, Layout } from "../../1_Små/Base";
import { Bilde } from "../../1_Små/Bilde";

export const HeroKontaktside = () => {
  return (
    <HeroContainer id="hero-display" c="z-1 h-340 relative bgImage">
      <Bilde
        c="object-cover"
        src="demoside-snekker/sidekix-media-vOZwOSHqrdg-unsplash_onealn.jpg"
        alt="Renovert kjøkken med lyst interiør"
        layout="fill"
      />

      <Layout>
        <div class="z-1 relative max-w-740 h-screen flex self-center m-auto ">
          <h1 className="text-h2 lg:text-h1 text-hvit text-center">
            LA OSS BYGGE DITT DRØMMEPROSJEKT
          </h1>
        </div>
      </Layout>
    </HeroContainer>
  );
};
