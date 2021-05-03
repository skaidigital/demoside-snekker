import Link from "next/link";
import {
  Grid,
  GridItem,
  HeroContainer,
  HeroContainerUtenPadding,
  Layout,
} from "../1_Små/Base";

export const CTAModal = () => {
  return (
    <section id="cta-modal" className="py-56 z-2">
      <header className="flex justify-between mx-24 top-0 py-16 mb-32 border-b-2 border-lys">
        <div></div>
        <div className="flex justify-center text-h4 font-medium">
          Oslo Snekker'n
        </div>
        <div>kryss</div>
      </header>

      <Layout>
        <h1 class="text-lys text-center mb-56">FÅ ET GRATIS TILBUD</h1>
        <Grid>
          <GridItem c="col-span-4 lg:col-start-3">
            <div class="flex flex-col mb-16">
              <label htmlFor="navn" className="mb-8">
                Navn
              </label>
              <input
                required
                placeholder="Skriv ditt navn her"
                type="text"
                className="p-8 bg-lys"
              />
            </div>
          </GridItem>
          <GridItem c="col-span-4 lg:col-start-7">
            <div class="flex flex-col mb-16">
              <label htmlFor="telefon" className="mb-8">
                Telefon
              </label>
              <input
                id="telefon"
                required
                placeholder="Skriv ditt telefonnummer her"
                type="tel"
                className="p-8 bg-lys"
              />
            </div>
          </GridItem>
          <GridItem c="col-span-4 lg:col-start-3">
            <div class="flex flex-col mb-16">
              <label htmlFor="epost" className="mb-8">
                E-post
              </label>
              <input
                id="epost"
                required
                placeholder="Skriv din e-post her"
                type="email"
                className="p-8 bg-lys"
              />
            </div>
          </GridItem>
          <GridItem c="col-span-4 lg:col-start-7">
            <div class="flex flex-col mb-16">
              <label htmlFor="lokasjon" className="mb-8">
                Lokasjon
              </label>
              <input
                id="lokasjon"
                required
                placeholder="Skriv hvor du holder til her"
                type="text"
                className="p-8 bg-lys"
              />
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-start-3">
            <div class="flex flex-col mb-16">
              <label htmlFor="informasjon" className="mb-8">
                Informasjon
              </label>
              <input
                id="informasjon"
                required
                placeholder="Skriv litt utfyllende om ditt prosjekt her"
                type="text"
                className="pt-8 pl-8 pb-56 bg-lys"
              />
            </div>
          </GridItem>
          <GridItem c="col-span-4 lg:col-start-3">
            <Link href="">
              <a className="font-semibold text-center bg-cta p-16">
                GI MEG ET TILBUD
              </a>
            </Link>
          </GridItem>
        </Grid>
      </Layout>
    </section>
  );
};
