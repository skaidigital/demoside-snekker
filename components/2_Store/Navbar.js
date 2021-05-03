import Link from "next/link";
import { Layout } from "../1_Små/Base";
import { useState } from "react";
import { CTAModal } from "./Modal";

const Navigasjon = [
  { navn: "Hjem", href: "/" },
  { navn: "Tjenester", href: "/tjenester" },
  { navn: "Om Oss", href: "/om-oslo-snekkern" },
  { navn: "Kontakt", href: "/kontaktside" },
];

const Tjenester = [
  { navn: "Oppussing", href: "/tjenester/oppussing" },
  { navn: "Terasse", href: "/tjenester/terasse" },
  { navn: "Taktekking", href: "/tjenester/taktekking" },
  { navn: "Bygge hus", href: "/tjenester/bygge-hus" },
];

const mapNavigasjon = () => {
  return Navigasjon.map(({ navn, href }) => {
    return (
      <Link href={href}>
        <a className="mr-24">{navn}</a>
      </Link>
    );
  });
};

const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div class="bg-mork p-24 flex flex-col">
      {Tjenester.map(({ navn, href }) => {
        return (
          <Link href={href}>
            <a
              className={
                toggleDropdown
                  ? "dropdown mb-24 text-lys font-medium"
                  : "mb-24 text-lys font-medium"
              }
              onMouseOver={() => setToggleDropdown(true)}
              onMouseLeave={() => setToggleDropdown(false)}
            >
              {navn}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="text-hvit bg-mork">
      {/* <CTAModal /> */}
      <Layout>
        <div class="flex justify-between py-24">
          <div>
            <span className="">
              <Link href="/">
                <a className={`text-h5 font-medium`}>Oslo Snekker'n</a>
              </Link>
            </span>
          </div>
          <div>
            {mapNavigasjon()}
            <Link href="/">
              <a
                className="bg-cta text-hvit py-16 px-32 font-semibold"
                onClick={() => setOpenModal(true)}
              >
                Få et gratis tilbud
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </nav>
  );
};
