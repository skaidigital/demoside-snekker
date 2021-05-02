import { Layout } from "../../1_Små/Base";
import { MainButton, SecondaryButton } from "../../1_Små/Knapper";
import {
  CTABanner,
  ReviewsGoogle,
  ReviewsMittanbud,
} from "../../2_Store/Grupper";

export const CTAHjemmeside = () => {
  return (
    <>
      <div className="bg-mork ">
        <Layout>
          <CTABanner />
        </Layout>
      </div>
    </>
  );
};

export default CTAHjemmeside;
