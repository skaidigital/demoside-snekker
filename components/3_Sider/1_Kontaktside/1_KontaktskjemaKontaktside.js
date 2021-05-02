import { Grid, GridItem, Layout, SectionContainer } from "../../1_Små/Base";
import { MainButton } from "../../1_Små/Knapper";

const Hammer = (
  <svg
    width="40"
    height="40"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="hammer"
    class="svg-inline--fa fa-hammer fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"
    ></path>
  </svg>
);

const Hus = (
  <svg
    width="40"
    height="40"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="home"
    class="svg-inline--fa fa-home fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
    ></path>
  </svg>
);

const Annet = (
  <svg
    width="40"
    height="40"
    aria-hidden="true"
    focusable="false"
    data-prefix="far"
    data-icon="question-circle"
    class="svg-inline--fa fa-question-circle fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
    ></path>
  </svg>
);

const Møbel = (
  <svg
    width="40"
    height="40"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="chair"
    class="svg-inline--fa fa-chair fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48zm334.3 213.9l-10.7-32c-4.4-13.1-16.6-21.9-30.4-21.9H42.7c-13.8 0-26 8.8-30.4 21.9l-10.7 32C-5.2 362.6 10.2 384 32 384v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384h256v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384c21.8 0 37.2-21.4 30.3-42.1z"
    ></path>
  </svg>
);

export const KontaktskjemaKontaktside = () => {
  return (
    <>
      <SectionContainer id="kontaktskjema">
        <Layout>
          <form action="">
            <Grid>
              <GridItem c="col-span-4 lg:col-start-3 flex flex-col">
                <label for="navn" className="mb-4">
                  Fullt navn
                </label>
                <input
                  id="navn"
                  required
                  type="text"
                  className="bg-lys p-4"
                  placeholder="Skriv ditt navn her"
                />
              </GridItem>
              <GridItem c="col-span-4 lg:col-start-7 flex flex-col">
                <label for="epost" className="mb-4">
                  E-post
                </label>
                <input
                  id="epost"
                  required
                  type="email"
                  className="bg-lys p-4"
                  placeholder="Skriv din e-post her"
                />
              </GridItem>
              <GridItem c="col-span-4 lg:col-start-3 flex flex-col">
                <label for="telefon" className="mb-4">
                  Telefon
                </label>
                <input
                  id="phone"
                  required
                  type="telefon"
                  className="bg-lys p-4"
                  placeholder="Skriv ditt telefonnummer her"
                />
              </GridItem>
              <GridItem c="col-span-4 lg:col-span-2 md:row-start-3 lg:col-start-3 grid items-stretch-self">
                <div className="bg-lys flex flex-col text-center py-8">
                  <div className="flex justify-center">{Hammer}</div>
                  <label for="oppussing" className="my-4">
                    Oppussing
                  </label>
                  <div class="flex justify-center">
                    <input id="oppussing" type="checkbox" name="tjeneste" />
                  </div>
                </div>
              </GridItem>
              <GridItem c="col-span-4 lg:col-span-2 md:row-start-3 lg:col-start-5 grid items-stretch-self">
                <div className="bg-lys flex flex-col text-center py-8">
                  <div className="flex justify-center">{Hus}</div>
                  <label for="byggeHus" className="my-4">
                    Bygge hus
                  </label>
                  <div class="flex justify-center">
                    <input id="byggeHus" type="checkbox" name="tjeneste" />
                  </div>
                </div>
              </GridItem>
              <GridItem c="col-span-4 lg:col-span-2 md:row-start-4 lg:row-start-3 lg:col-start-7 grid items-stretch-self">
                <div className="bg-lys flex flex-col text-center py-8">
                  <div className="flex justify-center">{Møbel}</div>
                  <label for="byggeMøbel" className="my-4">
                    Bygge møbel
                  </label>
                  <div class="flex justify-center">
                    <input id="byggeMøbel" type="checkbox" name="tjeneste" />
                  </div>
                </div>
              </GridItem>
              <GridItem c="col-span-4 lg:col-span-2 md:row-start-4 lg:row-start-3 lg:col-start-9 grid items-stretch-self">
                <div className="bg-lys flex flex-col text-center py-8">
                  <div className="flex justify-center">{Annet}</div>
                  <label for="annet" className="my-4">
                    Annet
                  </label>
                  <div class="flex justify-center">
                    <input id="annet" type="checkbox" name="tjeneste" />
                  </div>
                </div>
              </GridItem>
              <GridItem c="col-span-4 md:col-span-8 lg:col-start-3 flex flex-col">
                <label for="informasjon" className="mb-4">
                  Mer informasjon
                </label>
                <textarea
                  id="informasjon"
                  required
                  type="text"
                  className="bg-lys p-4 resize-none"
                  placeholder="Skriv mer utfyllende inforrmasjon her"
                />
              </GridItem>
              <GridItem c="col-span-4 md:col-span-8 lg:col-start-3 bg-cta">
                <button type="submit" className=" text-hvit text-p flex py-4">
                  SEND MELDING
                </button>
              </GridItem>
            </Grid>
          </form>
        </Layout>
      </SectionContainer>
    </>
  );
};
