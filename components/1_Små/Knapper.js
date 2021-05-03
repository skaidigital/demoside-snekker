import Link from "next/link";

export const MainButton = ({ tekst, href }) => {
  return (
    <Link href={href}>
      <a className=" justify-center bg-cta border-2 border-cta text-hvit font-semibold p-16 primaryButton flex w-0100 md:w-auto">
        {tekst}
      </a>
    </Link>
  );
};

export const SecondaryButton = ({ tekst, href, farge }) => {
  return (
    <Link href={href}>
      <a
        className={`justify-center text-${farge} border-2 border-${farge} font-semibold p-16 secondaryButton flex w-0100 md:w-auto`}
      >
        {tekst}
      </a>
    </Link>
  );
};
