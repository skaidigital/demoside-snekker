import { Grid, GridItem, Layout } from "../../1_Små/Base";
import { ReviewsGoogle, ReviewsMittanbud } from "../../2_Store/Grupper";

export const RatingsHjemmeside = () => {
  return (
    <div class="bg-lys py-56">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col md:flex-row justify-center">
            <div class="mb-24">
              <ReviewsGoogle rating="4.8" antall="99" />
            </div>
            <div class="">
              <ReviewsMittanbud rating="4.6" antall="48" />
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </div>
  );
};

export default RatingsHjemmeside;
