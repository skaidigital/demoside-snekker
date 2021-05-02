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
    <div class="bg-lys flex flex-row p-16 mt-8">
      <div>
        <div class="w-16 font-semibold mb-2">
          <span className="p-4 bg-ctaDus rounded-full">{initial}</span>
        </div>
      </div>
      <div>
        <h3 class="text-h5 font-semibold mb-2">{navn}</h3>
        <div className="text-label mb-2">{lengeSiden}</div>
        <div class="mb-4">
          <FemStjernerSmå />
        </div>
        <p>{brodtekst}</p>
      </div>
    </div>
  );
};
