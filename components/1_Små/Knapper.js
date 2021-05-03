import Link from "next/link";

export const MainButton = ({ tekst, href }) => {
  return (
    <Link href={href}>
      <a className="bg-cta border-2 border-cta text-hvit font-semibold p-16">
        {tekst}
      </a>
    </Link>
  );
};

export const SecondaryButton = ({ tekst, href, farge }) => {
  return (
    <Link href={href}>
      <a
        className={`text-${farge} border-2 border-${farge} font-semibold p-16`}
      >
        {tekst}
      </a>
    </Link>
  );
};
