import Link from "next/link";
import { Layout } from "../1_Små/Base";
import { useState } from "react";
import { CTAModal } from "./Modal";
import { Dropdown } from "./Dropdown";

const Navigasjon = [
  { navn: "Hjem", href: "/" },
  { navn: "Om Oss", href: "/om-oslo-snekkern" },
  { navn: "Kontakt", href: "/kontaktside" },
];

const mapNavigasjon = () => {
  return Navigasjon.map(({ navn, href }) => {
    return (
      <Link href={href}>
        <a className="mr-24 hover:underline flex self-center">{navn}</a>
      </Link>
    );
  });
};

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <nav className="text-hvit bg-mork relative">
      <CTAModal showModal={showModal} setShowModal={setShowModal} />
      <Layout>
        <div class="flex justify-between py-24">
          <div className="flex self-center">
            <span className="">
              <Link href="/">
                <a className={`text-h4 font-bold font-medium`}>
                  Oslo Snekker'n
                </a>
              </Link>
            </span>
          </div>
          <div className="flex self-center">
            {mapNavigasjon()}
            <Link href="">
              <a
                className="flex self-center  mr-24 hover:underline"
                onClick={openDropdown}
              >
                Tjenester
              </a>
            </Link>
            <Dropdown
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />

            <Link href="/">
              <a
                className="bg-cta text-hvit py-16 px-32 font-semibold primaryButton z-300 relative"
                onClick={openModal}
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
