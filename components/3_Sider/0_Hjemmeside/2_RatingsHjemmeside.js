import { ReviewsGoogle, ReviewsMittanbud } from "../../2_Store/Grupper";

export const RatingsHjemmeside = () => {
  return (
    <div class="flex flex-col md:flex-row justify-center bg-lys py-8">
      <div class="mr-8 md:mr-16 lg:mr-32">
        <ReviewsGoogle rating="4.8" antall="102" />
      </div>
      <ReviewsMittanbud rating="4.6" antall="48" />
    </div>
  );
};

export default RatingsHjemmeside;
