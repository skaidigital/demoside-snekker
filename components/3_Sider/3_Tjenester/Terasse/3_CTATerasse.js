import {
  HeroContainerUtenPadding,
  Layout,
  SectionContainer,
} from "../../../1_Små/Base";
import { CTABanner } from "../../../2_Store/Grupper";

export const CTATerasse = () => {
  return (
    <section id="tjenester-cta" className="mt-80">
      <div class="bg-lys border-2 border-mork">
        <Layout>
          <CTABanner tekstFarge="mork" />
        </Layout>
      </div>
    </section>
  );
};
