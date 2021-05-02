import { HeroKontaktside } from "../components/3_Sider/1_Kontaktside/0_HeroKontaktside";
import { KontaktskjemaKontaktside } from "../components/3_Sider/1_Kontaktside/1_KontaktskjemaKontaktside";
import { NextSeo } from "next-seo";
import { Navbar } from "../components/2_Store/Navbar";
import { Footer } from "../components/2_Store/Footer";
import { Header } from "../components/2_Store/Header";

export const Kontaktside = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Header />
      <Navbar />
      <HeroKontaktside />
      <KontaktskjemaKontaktside />
      <Footer />
    </>
  );
};

export default Kontaktside;
