import { Grid, HeroContainer, Layout } from "../../1_Små/Base";
import { Bilde } from "../../1_Små/Bilde";
import { MainButton, SecondaryButton } from "../../1_Små/Knapper";
import { CTABanner } from "../../2_Store/Grupper";

export const HeroHjemmeside = () => {
  return (
    <HeroContainer id="hero-hjemmeside" c="z-1 relative h-650 text-lys bgImage">
      <Bilde
        c="z-0 object-cover  bgImage"
        src="demoside-snekker/paul-trienekens-mLO6ILUbADA-unsplash_vnhugb.jpg"
        alt="Slipemaskin som pusser treverk"
        layout="fill"
      />
      <Layout>
        <div class="relative z-1">
          <div class="text-center m-auto lg:max-w-740">
            <h5 className="mb-8 mt-40 lg:mt-56">SNEKKER I OSLO SENTRUM</h5>
            <h1 className="mb-8">
              PREMIERE LANDSCAPING AND FENCING IN EASTERN IDAHO
            </h1>
            <p className="mb-32">
              Let’s bring your vision to life with a free consultation and
              planning call. It’s on us!
            </p>
            <div className="flex flex-col lg:flex-row  justify-center mt-32">
              <div class="lg:mr-8">
                <MainButton tekst="Få et gratis tilbud" href="/" />
              </div>
              <div class="lg:ml-8 mt-8 lg:mt-0">
                <SecondaryButton
                  tekst="Les om våre tjenester"
                  href="/"
                  farge="lys"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </HeroContainer>
  );
};
