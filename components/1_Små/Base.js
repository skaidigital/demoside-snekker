export const SectionContainer = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center py-80 md:py-120 lg:py-160 `;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};
// md:py-120 lg:py-160
export const Section1 = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center pt-40`;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};

export const HeroContainer = ({ children, id, farge, pt, c }) => {
  const klassenavn = `bg-${farge} mx-auto align-center pb-80 ${c} pt-40 md:pb-120 md:pt-56 lg:pb-240 lg:pt-80 `;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};

export const SameContainer = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center pt-40 md:pt-56 lg:pt-80 pb-40 md:pb-56 lg:pb-80`;
  return (
    <section id={id} className={klassenavn}>
      <Element name={id}>{children}</Element>
    </section>
  );
};

export const HeroContainerUtenPadding = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center py-40 md:pt-56 lg:pt-80 `;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto w-screen md:max-w lg:max-w xl:max-w">
      <div className="max-w-95 mx-auto align-center">{children}</div>
    </div>
  );
};

export const Grid = ({ children, r }) => {
  const klasseNavn = `grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-24 `;
  return <div className={klasseNavn}>{children}</div>;
};

export const GridItem = ({ c, children, id }) => {
  return (
    <div key={id} className={c}>
      {children}
    </div>
  );
};
