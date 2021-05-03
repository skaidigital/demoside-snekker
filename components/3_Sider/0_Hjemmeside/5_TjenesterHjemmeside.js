import {
  Grid,
  GridItem,
  HeroContainer,
  Layout,
  SectionContainer,
} from "../../1_Små/Base";
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
    <HeroContainer id="tjenester">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-12 mb-32">
            <h2 className="text-center text-h1 text-mork">
              Våre tjenester inkluderer
            </h2>
          </GridItem>
          <GridItem c="ml-24 lg:ml-0 col-span-4 lg:col-span-3 lg:col-start-4">
            <ul>
              {Venstreside.map((e) => {
                return <CheckGruppe tekst={e} />;
              })}
            </ul>
          </GridItem>
          <GridItem c="ml-24 lg:ml-0 col-span-4 lg:col-span-3 lg:col-start-7 mb-32">
            <ul>
              {Høyreside.map((e) => {
                return <CheckGruppe tekst={e} />;
              })}
            </ul>
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-5 lg:col-start-2 md:mb-56 grid justify-items-stretch">
            <Bilde
              src="demoside-snekker/annie-gray-WEWTGkPUVT0-unsplash_dkjzqq.jpg"
              alt="To snekre som skjærer ved"
              w={3200}
              h={2133}
            />
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-5 lg:col-start-7 grid justify-items-stretch md:mb-56 mb-32">
            <Bilde
              src="demoside-snekker/jens-behrmann-Iy3OdKaszJs-unsplash_munmkd.jpg"
              alt="Tre snekre som bygger vegg"
              w={3200}
              h={2199}
            />
          </GridItem>
        </Grid>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 ">
            <p>
              We perform extensive on-site evaluations and design personalized
              accsesibility oslutions for problematic areas in your home or
              business
            </p>
          </GridItem>

          <GridItem c="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
            <p className="mb-32">
              We assist individuals with limited abilities, seniors, and
              caregivers with solutions that allow them to overcome the daily
              challenges of everyday living. Doing so enables our clients to
              remain comfortable and independent in the home environment they
              love in New Jersey and Philadelphia.
            </p>
            <p className="mb-56">
              Call the Mobility123 Safe Living Team today to see how we can
              assist you with personalized accessibility solutions.
            </p>
          </GridItem>
        </Grid>
        <div className="flex flex-col md:flex-row justify-center">
          <div class="md:mr-4 mb-16 md:mb-0">
            <MainButton tekst="Få et gratis tilbud" href="" />
          </div>
          <div class="md:ml-4">
            <SecondaryButton tekst="les om våre tjenester" href="" />
          </div>
        </div>
      </Layout>
    </HeroContainer>
  );
};
