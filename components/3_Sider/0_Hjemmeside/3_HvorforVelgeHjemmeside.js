import {
  Grid,
  GridItem,
  HeroContainer,
  Layout,
  SectionContainer,
} from "../../1_Små/Base";

const Stjerne = (
  <svg
    height="56"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="star"
    class="svg-inline--fa fa-star fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="#7600FF"
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    ></path>
  </svg>
);
const Check = (
  <svg
    height="56"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="check-double"
    class="svg-inline--fa fa-check-double fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="#7600FF"
      d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"
    ></path>
  </svg>
);
const Handshake = (
  <svg
    height="56"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="handshake"
    class="svg-inline--fa fa-handshake fa-w-20"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path
      fill="#7600FF"
      d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
    ></path>
  </svg>
);
const Clock = (
  <svg
    height="56"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="history"
    class="svg-inline--fa fa-history fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="#7600FF"
      d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"
    ></path>
  </svg>
);

const Grunner = [
  {
    svg: Stjerne,
    heading: "Top rated snekker",
    brodtekst:
      "Roto-Rooter Pocatello has fantastic reviews across the web. We are proud of the great service we provide to our happy customers.",
  },
  {
    svg: Check,
    heading: "Licensed & Insured",
    brodtekst:
      "Roto-Rooter plumbers are licensed and insured. We follow applicable plumbing codes and our technicians arrive in branded Roto-Rooter vehicles.",
  },
  {
    svg: Handshake,
    heading: "Trusted since 1965",
    brodtekst:
      "Roto-Rooter Pocatello has been servicing the people of this area since 1965. We take pride in being locally owned and operated.",
  },
  {
    svg: Clock,
    heading: "Available 24/7",
    brodtekst:
      "Because plumbing problems can strike when you least expect them, our friendly and knowledgeable team works around the clock, tackling jobs big and small.",
  },
];

export const HvorforVelgeHjemmeside = () => {
  return (
    <HeroContainer id="hvorfor-velge-oslo-snekkern">
      <Layout>
        <h2 class="text-h1 text-center text-mork mb-56">
          Hvorfor velge Oslo Snekker'n?
        </h2>
        <Grid>
          {Grunner.map(({ svg, heading, brodtekst }) => {
            return (
              <GridItem c="col-span-4 lg:col-span-3">
                <div className="mb-32">
                  <div className="mb-16">{svg}</div>
                  <h3 className="mb-8">{heading}</h3>
                  <p>{brodtekst}</p>
                </div>
              </GridItem>
            );
          })}
        </Grid>
      </Layout>
    </HeroContainer>
  );
};
