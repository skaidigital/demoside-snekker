import { Grid, GridItem, Layout, Section1 } from "../../../1_Små/Base";
import { Bilde } from "../../../1_Små/Bilde";
import { CheckGruppe } from "../../../2_Store/Grupper";

export const HuskelisteTerasse = () => {
  return (
    <Section1 id="huskeliste-terasse">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-start-3">
            <h2 class="mb-16 mt-80">Noen ting du må tenke på</h2>
            <p class="font-semibold mb-16">
              Noen viktige ting å tenke gjennom enten du skal gjøre jobben selv
              eller leie inn andre er:
            </p>
            <ul>
              <CheckGruppe tekst="Hva skal terrassen brukes til? En kosekrok i solveggen, til hageselskaper, eller kanskje et sted for boblebadet?" />
              <CheckGruppe tekst="Hvor stor del av hagen går med til terrassen? Det kan være lurt å måle opp med snorer, slik at du ser hvordan stor plass terrassen bør og skal ta." />
              <CheckGruppe tekst="Er terrassen plassert i solen? Få det meste ut av ettermiddagssola." />
              <CheckGruppe tekst="Er det innsyn fra naboer? I så fall kan det være lurt å sette opp en levegg." />
              <CheckGruppe tekst="​Skal du ha et badebasseng eller boblebad? Husk ekstra fundamentering under." />
            </ul>
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
  );
};
