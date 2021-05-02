import Link from "next/link";
import { Layout } from "../1_Små/Base";

const Navigasjon = [
  { navn: "Hjem", href: "/" },
  { navn: "Tjenester", href: "/tjenester" },
  { navn: "Om Oss", href: "/om-oslo-snekkern" },
  { navn: "Kontakt", href: "/kontaktside" },
];

const mapNavigasjon = () => {
  return Navigasjon.map(({ navn, href }) => {
    return (
      <Link href={href}>
        <a className="mr-8">{navn}</a>
      </Link>
    );
  });
};

export const Navbar = () => {
  return (
    <nav className="text-hvit bg-mork">
      <Layout>
        <div class="flex justify-between py-8">
          <div>
            <span className="">
              <Link href="/">
                <a className="text-h5 font-medium">Oslo Snekker'n</a>
              </Link>
            </span>
          </div>
          <div>
            {mapNavigasjon()}
            <Link href="/">
              <a className="bg-cta text-hvit p-4">Få et gratis tilbud</a>
            </Link>
          </div>
        </div>
      </Layout>
    </nav>
  );
};
