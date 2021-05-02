import { NextSeo } from "next-seo";
import { Header } from "../components/2_Store/Header";
import { Navbar } from "../components/2_Store/Navbar";
import { Footer } from "../components/2_Store/Footer";
import { HeroOmOss } from "../components/3_Sider/2_OmOss/0_HeroOmOss";
import { InnholdOmOss } from "../components/3_Sider/2_OmOss/1_InnholdOmOss";

export const OmOsloSnekkern = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Header />
      <Navbar />
      <HeroOmOss />
      <InnholdOmOss />
      <Footer />
    </>
  );
};

export default OmOsloSnekkern;
