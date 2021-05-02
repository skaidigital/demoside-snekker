import { Grid, GridItem, Layout, SectionContainer } from "../../1_Små/Base";
import { Bilde } from "../../1_Små/Bilde";
import { MainButton, SecondaryButton } from "../../1_Små/Knapper";
import { CheckGruppe } from "../../2_Store/Grupper";

const Venstreside = [
  "Våtromsarbeid",
  "Bygging av terasse",
  "Totalenteprise",
  "Påbygg / Tilbygg",
  "Tømrerarbeid",
];

const Høyreside = [
  "Montering av dør og vindu",
  "Gulvlegging",
  "Renovering av hus",
  "Vegger",
  "Tømrerarbeid",
];

export const TjenesterHjemmeside = () => {
  return (
    <SectionContainer id="tjenester">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 lg:col-span-5 lg:col-start-2 mb-8 grid justify-items-stretch">
            <Bilde
              src="demoside-snekker/annie-gray-WEWTGkPUVT0-unsplash_dkjzqq.jpg"
              alt="To snekre som skjærer ved"
              w={3200}
              h={2133}
            />
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-5 lg:col-start-7 grid justify-items-stretch mb-8">
            <Bilde
              src="demoside-snekker/jens-behrmann-Iy3OdKaszJs-unsplash_munmkd.jpg"
              alt="Tre snekre som bygger vegg"
              w={3200}
              h={2199}
            />
          </GridItem>
        </Grid>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
            <p>
              We perform extensive on-site evaluations and design personalized
              accsesibility oslutions for problematic areas in your home or
              business
            </p>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-12">
            <h2 className="text-center">
              Våre tjenester inkluderer blant annet
            </h2>
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-3 lg:col-start-4">
            <ul>
              {Venstreside.map((e) => {
                return <CheckGruppe tekst={e} />;
              })}
            </ul>
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-3 lg:col-start-7">
            <ul>
              {Høyreside.map((e) => {
                return <CheckGruppe tekst={e} />;
              })}
            </ul>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
            <p className="mb-4">
              We assist individuals with limited abilities, seniors, and
              caregivers with solutions that allow them to overcome the daily
              challenges of everyday living. Doing so enables our clients to
              remain comfortable and independent in the home environment they
              love in New Jersey and Philadelphia.
            </p>
            <p className="mb-4">
              Call the Mobility123 Safe Living Team today to see how we can
              assist you with personalized accessibility solutions.
            </p>
          </GridItem>
        </Grid>
        <div className="text-center">
          <div class="mr-2">
            <MainButton tekst="Få et gratis tilbud" href="" />
          </div>
          <div class="ml-2">
            <SecondaryButton tekst="les om våre tjenester" href="" />
          </div>
        </div>
      </Layout>
    </SectionContainer>
  );
};
