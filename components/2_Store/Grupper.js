import { Bilde } from "../1_Små/Bilde";

const Stjerne = (
  <svg
    height="32"
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
      fill="#FFCC00"
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    ></path>
  </svg>
);

const StjerneSmå = (
  <svg
    height="24"
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
      fill="#FFCC00"
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    ></path>
  </svg>
);

export const FemStjerner = () => {
  return (
    <div class="flex">
      {Stjerne}
      {Stjerne}
      {Stjerne}
      {Stjerne}
      {Stjerne}
    </div>
  );
};

export const FemStjernerSmå = () => {
  return (
    <div class="flex">
      {StjerneSmå}
      {StjerneSmå}
      {StjerneSmå}
      {StjerneSmå}
      {StjerneSmå}
    </div>
  );
};

export const CheckGruppe = ({ tekst }) => {
  return (
    <div className="flex">
      <div className="mr-16 mt-4 ">
        <svg
          className="inline-block "
          width="24"
          height="24"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="check-circle"
          class="svg-inline--fa fa-check-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#7600FF"
            d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
          ></path>
        </svg>
      </div>
      <li className="text-p mb-16">{tekst}</li>
    </div>
  );
};

export const ReviewsGoogle = ({ svg, rating, antall }) => {
  return (
    <div class="flex mr-56">
      <div class="w-96 lg:w-120 flex self-center mr-8">
        <Bilde
          c="object-contain"
          src="demoside-snekker/google-logo_u7hmoe.png"
          alt="Google logo"
          w={1024}
          h={346}
        />
      </div>
      {FemStjerner()}
      <span className="text-h5 lg:text-h4 flex font-medium ml-8">
        <div>{rating}</div> <div> ({antall})</div>
      </span>
    </div>
  );
};

export const ReviewsMittanbud = ({ svg, rating, antall }) => {
  return (
    <div class="flex ">
      <div class="w-96 lg:w-120 flex self-center mr-8">
        <Bilde
          c="object-contain"
          src="demoside-snekker/mittanbud-logo_ptwgra.png"
          alt="Mittanbud"
          w={1024}
          h={346}
        />
      </div>
      {FemStjerner()}
      <span className="text-h5 lg:text-h4 font-medium ml-8">
        {rating} ({antall})
      </span>
    </div>
  );
};

export const CTABanner = ({ tekstFarge }) => {
  return (
    <div
      className={`flex flex-col xl:flex-row py-32 text-${tekstFarge} justify-between`}
    >
      <div>
        <h2 className={`text-h5 text-${tekstFarge}`}>Få et tilbud</h2>
        <p className="text-label">
          Få et tilbud på <strong>snekkertjenester</strong>
        </p>
      </div>
      <div className="flex self-center">
        <form action="" className="">
          <div className="lg:flex-row lg:flex block my-32 xl:my-0">
            <input
              placeholder="Navn"
              type="text"
              id="navn"
              className="mb-16 lg:mb-0  bg-mork border-2 border-lys p-8 lg:w-160 text-label w-0100 text-lys ml-4"
            />
            <input
              placeholder="Telefon"
              type="tel"
              id="telefon"
              className="mb-16 lg:mb-0  bg-mork border-2 border-lys p-8 text-lys ml-4 lg:w-160 w-0100 text-label"
            />
            <input
              placeholder="E-post"
              type="email"
              id="epost"
              className="mb-16  lg:mb-0 bg-mork border-2 border-lys p-8 text-lys ml-4 lg:w-160 w-0100 text-label"
            />
            <button
              type="submit"
              className="mb-16 lg:mb-0 primaryButton bg-cta  font-semibold p-8 text-lys ml-4 lg:w-160 w-0100 text-label flex justify-center border-2 border-cta"
            >
              GI MEG ET TILBUD
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        <span className="text-label">Contact us at</span>
        <a href="tel:(+47)90175235" className="font-semibold text-p underline">
          (+47) 901-752-35
        </a>
      </div>
    </div>
  );
};
