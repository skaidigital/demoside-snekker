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

const MobileNavigasjon = [
  { navn: "Hjem", href: "/" },
  { navn: "Om oss", href: "/om-oslo-snekkern" },
  { navn: "Kontakt oss", href: "/kontaktside" },
  { navn: "Tjenester", href: "/tjenester/terasse" },
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
  const [showDesktop, setShowDesktop] = useState(false);
  const [showMobilenav, setShowMobilenav] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const openMobilenav = () => {
    setShowMobilenav((prev) => !prev);
  };
  return (
    <>
      <nav className={`hidden lg:flex text-hvit bg-mork relative`}>
        <CTAModal showModal={showModal} setShowModal={setShowModal} />
        <Layout>
          <div className="flex justify-between py-24">
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
      {showMobilenav ? (
        <>
          <nav className="flex lg:hidden h-100 bg-mork fixed-nav">
            <div className="ml-24">
              <header className="flex justify-between text-lys my-16 ">
                <div>
                  <h1 className="text-h4">Oslo Snekker'n</h1>
                </div>
                <div
                  className="strek"
                  onClick={() => setShowMobilenav(!showMobilenav)}
                ></div>
              </header>
              <ul className="mt-56">
                {MobileNavigasjon.map(({ navn, href }, id) => {
                  return (
                    <Link href={href} key={id}>
                      <li className="text-h1 font-semibold text-lys mt-16">
                        {navn}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <nav className="flex lg:hidden bg-mork fixed-nav">
          <header className="flex justify-between text-lys bg-mork  my-16 ml-24 ">
            <div>
              <h1 className="text-h4">Oslo Snekker'n</h1>
            </div>
            <div
              className="strek"
              onClick={() => setShowMobilenav(!showMobilenav)}
            ></div>
          </header>
        </nav>
      )}
    </>
  );
};
