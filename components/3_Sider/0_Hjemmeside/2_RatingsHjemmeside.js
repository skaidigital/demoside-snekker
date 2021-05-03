import { ReviewsGoogle, ReviewsMittanbud } from "../../2_Store/Grupper";

export const RatingsHjemmeside = () => {
  return (
    <div class="flex flex-col md:flex-row justify-center bg-lys py-56">
      <ReviewsGoogle rating="4.8" antall="102" />
      <ReviewsMittanbud rating="4.6" antall="48" />
    </div>
  );
};

export default RatingsHjemmeside;
