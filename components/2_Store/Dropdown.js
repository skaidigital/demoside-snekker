import Link from "next/link";
import React, { useRef } from "react";
import { useOutsideClick } from "../1_Små/Hooks";

const Tjenester = [
  { navn: "Oppussing", href: "/tjenester/terasse" },
  { navn: "Terasse", href: "/tjenester/terasse" },
  { navn: "Taktekking", href: "/tjenester/terasse" },
  { navn: "Bygge hus", href: "/tjenester/terasse" },
];

export const Dropdown = ({ showDropdown, setShowDropdown }) => {
  return (
    <>
      {showDropdown ? (
        <div class="bg-mork flex mt-80 flex-col absolute z-200 ml-210 ">
          <ul>
            {Tjenester.map(({ navn, href, c }, index) => {
              return (
                <div class="cursor-pointer">
                  <Link href={href}>
                    <li key={index} className="py-16 px-32 hover:bg-cta">
                      <a
                        className={"text-lys font-medium"}
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        {navn}
                      </a>
                    </li>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};
