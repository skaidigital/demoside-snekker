import { BildeData } from "../../../0_Data/Tjenester/Terasse";
import { Grid, GridItem, Layout, Section1 } from "../../../1_Små/Base";
import { Bilde } from "../../../1_Små/Bilde";
import { FireBilder } from "../../../2_Store/Cards";
import { CheckGruppe } from "../../../2_Store/Grupper";

const mapBildeData = () => {
  return BildeData.map(({ src, alt, w, h }) => {
    return <FireBilder src={src} alt={alt} w={w} h={h} />;
  });
};

export const IntroTerasse = () => {
  return (
    <>
      <Section1 id="intro-terasse">
        <Layout>
          <Grid>
            <GridItem c="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
              <p className="mb-32">
                En terrasse er et planert område på bakkenivå, eller på tak av
                bygning, eller deler av bygning, som er plassert ved fasaden.
                Området er gjerne avgrenset av støttemur eller brystning. Vi
                bygger terrasser der det lar seg gjøre. En terrasse kan også ha
                et dekke av tre, stein eller betong. Terrassen er oftest
                plassert slik at det ikke er innsyn fra husets forside.
              </p>
              <p>
                Ønsker du å oppgradere utearealet? Selv om det å bygge terrasse
                ofte er en enkel jobb som går an å gjøre på egenhånd, er
                utfordringen til mange at tiden ikke strekker til. Derfor er det
                ofte både rimeligere og enklere å leie inn fagfolk til å gjøre
                jobben fremfor å gjøre alt selv.
              </p>
              bilder
            </GridItem>
            <GridItem c="col-span-2 md:col-span-4 lg:col-start-3 h-304 grid justify-items-stretch">
              <Bilde
                c="object-cover"
                src="demoside-snekker/daniela-gisin-krumsick-VtO6A-I3piU-unsplash_rjc0dl.jpg"
                alt="Oppusset kjøkken i leilighet"
                w={3200}
                h={2134}
              />
            </GridItem>
            <GridItem c="col-span-2 md:col-span-4 lg:col-start-7 h-304 grid justify-items-stretch">
              <Bilde
                c="object-cover"
                src="demoside-snekker/greyson-joralemon-A1g0oeX29ec-unsplash_pblshm.jpg"
                alt="Sag som skjærer gjennom planke"
                w={3200}
                h={1799}
              />
            </GridItem>
            <GridItem c="col-span-2 md:col-span-4 lg:col-start-3 h-304 grid justify-items-stretch">
              <Bilde
                c="object-cover"
                src="demoside-snekker/jens-behrmann-Iy3OdKaszJs-unsplash_munmkd.jpg"
                alt="Tre snekre som fester veggplate"
                w={3200}
                h={2119}
              />
            </GridItem>
            <GridItem c="col-span-2 md:col-span-4 lg:col-start-7 h-304 grid justify-items-stretch">
              <Bilde
                c="object-cover"
                src="demoside-snekker/thayran-melo-iCnKeuwwPPw-unsplash_fertzm.jpg"
                alt="Tre snekre som reiser vegg"
                w={2400}
                h={3200}
              />
            </GridItem>
          </Grid>
        </Layout>
      </Section1>
    </>
  );
};
