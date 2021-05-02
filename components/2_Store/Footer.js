import Link from "next/link";
import { Grid, GridItem, Layout, SectionContainer } from "../1_Små/Base";

const Navigasjon = [
  { navn: "Hjem", href: "/" },
  { navn: "Tjenester", href: "/tjenester" },
  { navn: "Kontakt", href: "/kontaktside" },
  { navn: "Om oss", href: "/om-oslo-snekkern" },
];

const mapNavigasjon = () => {
  return Navigasjon.map(({ navn, href }) => {
    return (
      <Link href={href}>
        <a className="mb-8 text-p hover:font-semibold hover:underline focus:font-semibold focus:underline transition duration:200 ease-in-out">
          {navn}
        </a>
      </Link>
    );
  });
};

const Kontaktinfo = () => {
  return (
    <div class="flex flex-col">
      <div class="flex mb-8">
        <div>8609 N Kraft Rd, Pocatello, ID 83204</div>
      </div>
      <div class="flex mb-8">
        <div>
          <a href="tel:(208)232-2458">(208) 232-2458</a>
        </div>
      </div>
      <div class="flex mb-8">
        <div>
          <a href="mailto:rotopoke@mail.com">rotopoke@mail.com</a>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-mork pt-80 text-hvit">
        <Layout>
          <Grid>
            <GridItem c="col-span-4">
              <h2 class="text-h5 mb-8">Få et gratis tilbud</h2>
              <form className="flex flex-col" action="">
                <input
                  required
                  type="text"
                  placeholder="Skriv inn ditt navn"
                  className="pl-8 py-4 mb-4"
                />
                <input
                  required
                  type="email"
                  placeholder="Skriv inn din e-post"
                  className="pl-8 py-4 mb-4"
                />
                <input
                  required
                  type="phone"
                  placeholder="Skriv inn ditt telefonnr"
                  className="pl-8 py-4 mb-4"
                />
                <button
                  type="submit"
                  className="w-0100 bg-cta text-p py-4 hover:bg-ctaVar focus:bg-ctaVar transition duration:200 ease-in-out"
                >
                  KONTAKT OSS
                </button>
              </form>
            </GridItem>

            {/* Navigasjon */}
            <GridItem c="col-span-4 lg:col-start-6 lg:col-span-3">
              <h2 class="text-h5 mb-8">Navigasjon</h2>
              <div class="flex flex-col">{mapNavigasjon()}</div>
            </GridItem>

            <GridItem c="col-span-4">
              <h2 class="text-h5 mb-8">Kontaktinfo</h2>
              {Kontaktinfo()}
            </GridItem>

            {/* Lagd av  */}
            <GridItem c="col-span-4 md:col-span-8 lg:col-span-12">
              <div class="border-t-2 border-lys flex flex-col md:flex-row justify-between my-16 pt-4">
                <p>
                  Opphavsrett{" "}
                  <span className="font-semibold">
                    @{new Date().getFullYear()}
                  </span>
                </p>
                <div>
                  <p>
                    Nettside lagd av{" "}
                    <a href="https://skaidigital.no" className="font-semibold">
                      Skai Digital
                    </a>
                  </p>
                </div>
                <div>
                  <Link href="/sitemap.xml">
                    <a>Sitemap</a>
                  </Link>
                  <Link href="/personvern">
                    <a className="ml-16">Personvern</a>
                  </Link>
                </div>
              </div>
            </GridItem>
          </Grid>
        </Layout>
      </footer>
    </>
  );
};
