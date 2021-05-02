import Link from "next/link";

export const MainButton = ({ tekst, href }) => {
  return (
    <Link href={href}>
      <a className="bg-cta border-2 border-cta text-hvit font-semibold p-8">
        {tekst}
      </a>
    </Link>
  );
};

export const SecondaryButton = ({ tekst, href }) => {
  return (
    <Link href={href}>
      <a className="text-mork border-2 border-mork font-semibold p-8">
        {tekst}
      </a>
    </Link>
  );
};
