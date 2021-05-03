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
        <a className="mb-16 text-p hover:font-semibold hover:underline focus:font-semibold focus:underline transition duration:200 ease-in-out">
          {navn}
        </a>
      </Link>
    );
  });
};

const Kontaktinfo = () => {
  return (
    <div class="flex flex-col">
      <div class="flex mb-16">
        <div>8609 N Kraft Rd, Pocatello, ID 83204</div>
      </div>
      <div class="flex mb-16">
        <div>
          <a href="tel:(208)232-2458">(208) 232-2458</a>
        </div>
      </div>
      <div class="flex mb-16">
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
              <h2 class="text-h5 mb-24 text-lys">Få et gratis tilbud</h2>
              <form className="flex flex-col" action="">
                <input
                  required
                  type="text"
                  placeholder="Skriv inn ditt navn"
                  className="pl-8 py-12 mb-8"
                />
                <input
                  required
                  type="email"
                  placeholder="Skriv inn din e-post"
                  className="pl-8 py-12 mb-8"
                />
                <input
                  required
                  type="phone"
                  placeholder="Skriv inn ditt telefonnr"
                  className="pl-8 py-12 mb-8"
                />
                <button
                  type="submit"
                  className="w-0100 bg-cta text-p py-12 hover:bg-ctaVar focus:bg-ctaVar transition duration:200 ease-in-out mb-56"
                >
                  KONTAKT OSS
                </button>
              </form>
            </GridItem>

            {/* Navigasjon */}
            <GridItem c="col-span-4 lg:col-start-6 lg:col-span-3">
              <h2 class="text-h5 mb-16 text-lys">Navigasjon</h2>
              <div class="flex flex-col">{mapNavigasjon()}</div>
            </GridItem>

            <GridItem c="col-span-4">
              <h2 class="text-h5 mb-24 text-lys">Kontaktinfo</h2>
              {Kontaktinfo()}
            </GridItem>

            {/* Lagd av  */}
            <GridItem c="col-span-4 md:col-span-8 lg:col-span-12 ">
              <div class="border-t-2 border-lys flex flex-col md:flex-row justify-between py-16">
                <p className="text-label">
                  Opphavsrett{" "}
                  <span className="font-semibold">
                    @{new Date().getFullYear()}
                  </span>
                </p>
                <div>
                  <p className="text-label">
                    Nettside lagd av{" "}
                    <a
                      href="https://skaidigital.no"
                      className="font-semibold text-label"
                    >
                      Skai Digital
                    </a>
                  </p>
                </div>
                <div className="font-medium text-label">
                  <Link href="/sitemap.xml">
                    <a className="text-label">Sitemap</a>
                  </Link>
                  <Link href="/personvern">
                    <a className="ml-32 text-label">Personvern</a>
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
