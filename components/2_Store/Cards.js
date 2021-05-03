import { Grid, GridItem } from "../1_Små/Base";
import { Bilde } from "../1_Små/Bilde";
import { FemStjernerSmå } from "../2_Store/Grupper";

export const FireBilder = ({ src, alt, w, h }) => {
  return (
    <>
      <GridItem c="col-span-4">
        <Bilde src={src} alt={alt} w={w} h={h} />
      </GridItem>
    </>
  );
};

export const ReviewKort = ({ initial, navn, lengeSiden, brodtekst }) => {
  return (
    <div class="bg-lys flex flex-row p-16 mt-24">
      <div>
        <div className="font-semibold p-8 mr-16 bg-ctaDus rounded-circle">
          <p class="px-8">{initial}</p>
        </div>
      </div>
      <div>
        <h3 class="text-h5 font-semibold mb-8">{navn}</h3>
        <div className="text-label mb-8">{lengeSiden}</div>
        <div class="mb-16">
          <FemStjernerSmå />
        </div>
        <p>{brodtekst}</p>
      </div>
    </div>
  );
};
