import {
  Grid,
  GridItem,
  HeroContainer,
  HeroContainerUtenPadding,
  Layout,
  SectionContainer,
} from "../../1_Små/Base";
import { Bilde } from "../../1_Små/Bilde";

export const InnholdOmOss = () => {
  return (
    <HeroContainer id="om-oss">
      <Layout>
        <div class="mb-80">
          <Grid>
            <GridItem c="col-span-4 md:col-span-8 lg:col-span-6 mb-16">
              <h2 className="text-h2 text-cta mb-8">Om oss</h2>
              <p className="mb-32">
                Vi tilbyr alt av betong- og tømrerarbeider, som: Tilbygg,
                nybygg, underbygg, platting, verandaer, påbygg, vann og
                råteskader, modernisering, utskiftninger av utvendig panel,
                vedlikehold, service, restaurering, rehabilitering,
                forskalingsarbeider, bad og kjøkken m.m. Vi er for tiden seks
                ansatte, hvorav to bygg- og tømrermestere, som satser på de
                beste løsninger for ditt behov, til topp kvalitet
              </p>
              <p className="">
                RMLF only uses the highest quality material in the landscape and
                fence industry. At RMLF we use the right equipment and tools for
                the job leaving your property perfect when your project is
                completed.
              </p>
            </GridItem>
            <GridItem c="col-span-4 md:col-span-8 lg:col-start-8 lg:col-span-5 grid items-self-strech">
              <Bilde
                src="demoside-snekker/steve-mushero-c2YrTpgY-jY-unsplash_ocuikg.jpg"
                alt="Snekker som skjærer planke med sag"
                w={3200}
                h={2489}
                c="object-cover"
              />
            </GridItem>
          </Grid>
        </div>

        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-5 grid items-self-stretch">
            <Bilde
              src="demoside-snekker/annie-gray-WEWTGkPUVT0-unsplash_dkjzqq.jpg"
              alt="To snekre som bruker elektrisk sag for å kappe planke"
              w={3200}
              h={2133}
              c="object-cover"
            />
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7 ">
            <div className="mb-32">
              <h2 className="text-cta mb-8">Tømrer</h2>
              <p>
                Tenker du på å bygge på huset eller pusse opp? Vil du slå sammen
                to rom, for eksempel stue og kjøkken? Eller trenger du å dele
                opp et stort rom så barna får hvert sitt soverom? Øivind Fjeld
                AS kan hjelpe deg med ditt prosjekt.
              </p>
            </div>
            <div className="mb-32">
              <h2 className="text-cta mb-8">Entreprenør</h2>
              <p>
                Vi leverer entreprenørtjenester i Oslo og omegn. Kjernen i vår
                virksomhet er bred kompentanse over mange felt og våre
                anleggsarbeidere har mange års erfaring – dette merkes på
                arbeidet vi gjør. Vi sørger for å alltid levere kvalitet til
                rett tid og konkuransedyktige priser..
              </p>
            </div>
            <div className="mb-32">
              <h2 className="text-cta mb-8">Enterprise</h2>
              <p>
                Vi har årelangt samarbeide med andre håndverksfag, som
                elektrikere, rørleggere, malere og flisleggere og kan utføre
                prosjekter som hovedentrepriser.
              </p>
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </HeroContainer>
  );
};
