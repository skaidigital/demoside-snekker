import { Grid, GridItem, Layout, SectionContainer } from "../../1_Små/Base";
import { ReviewKort } from "../../2_Store/Cards";
import { ReviewsGoogle, ReviewsMittanbud } from "../../2_Store/Grupper";

export const AnmeldelserHjemmeside = () => {
  return (
    <SectionContainer id="reviews">
      <Layout>
        <h2 className="text-h1 text-mork text-center mb-8">Fornøyde kunder</h2>
        <Grid>
          <GridItem c="col-span-4 lg:col-span-5 lg:col-start-2">
            <ReviewKort
              initial="M"
              navn="Matthew Anderson"
              lengeSiden="1 måned siden"
              brodtekst="I was very impressed with Taylorview Dental today as a new patient. They ran on time and were so friendly. I really enjoyed talking to Dr. Davis. He did a great job filling my cavities. I was very impressed with how painless the numbing was. That is the part I fear the most and he made it virtually painless."
            />
            <ReviewKort
              initial="A"
              navn="Abby French"
              lengeSiden="1 måned siden"
              brodtekst="When I was a kid, I hit my mouth and chipped a front tooth. If you looked closely, you could see a clear line from where the tooth ended and the composite began, and the composite color never matched my tooth. I told Dr. Brett Davis I wanted that fixed and that I was considering veneers. He told me he thought he could easily fix it without going through such an expensive and invasive process. Today I went back to get the tooth fixed, and you can’t even tell that there is anything wrong with the tooth. It looks perfect. Now there’s no line and the color is exact. I appreciate the time he spent to make sure it was exactly what I wanted. I can’t sing him enough praises!"
            />
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-5 lg:col-start-7">
            <ReviewKort
              initial="A"
              navn="Abby French"
              lengeSiden="1 måned siden"
              brodtekst="When I was a kid, I hit my mouth and chipped a front tooth. If you looked closely, you could see a clear line from where the tooth ended and the composite began, and the composite color never matched my tooth. I told Dr. Brett Davis I wanted that fixed and that I was considering veneers. He told me he thought he could easily fix it without going through such an expensive and invasive process. Today I went back to get the tooth fixed, and you can’t even tell that there is anything wrong with the tooth. It looks perfect. Now there’s no line and the color is exact. I appreciate the time he spent to make sure it was exactly what I wanted. I can’t sing him enough praises!"
            />
            <ReviewKort
              initial="M"
              navn="Matthew Anderson"
              lengeSiden="1 måned siden"
              brodtekst="I was very impressed with Taylorview Dental today as a new patient. They ran on time and were so friendly. I really enjoyed talking to Dr. Davis. He did a great job filling my cavities. I was very impressed with how painless the numbing was. That is the part I fear the most and he made it virtually painless."
            />
          </GridItem>
        </Grid>
      </Layout>
    </SectionContainer>
  );
};
