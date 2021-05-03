import Link from "next/link";

const Tjenester = [
  { navn: "Oppussing", href: "/tjenester/oppussing" },
  { navn: "Terasse", href: "/tjenester/terasse" },
  { navn: "Taktekking", href: "/tjenester/taktekking" },
  { navn: "Bygge hus", href: "/tjenester/bygge-hus" },
];

export const Dropdown = ({ showDropdown, setShowDropdown }) => {
  return (
    <>
      {showDropdown ? (
        <div class="bg-mork flex mt-24 flex-col absolute z-200 ml-210 ">
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
