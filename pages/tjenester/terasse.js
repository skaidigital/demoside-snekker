import { NextSeo } from "next-seo";
import { Navbar } from "../../components/2_Store/Navbar";
import { Footer } from "../../components/2_Store/Footer";
import { HeroTerasse } from "../../components/3_Sider/3_Tjenester/Terasse/0_HeroTerasse";
import { IntroTerasse } from "../../components/3_Sider/3_Tjenester/Terasse/1_IntroTerasse";
import { HuskelisteTerasse } from "../../components/3_Sider/3_Tjenester/Terasse/2_HuskelisteTerasse";
import { CTATerasse } from "../../components/3_Sider/3_Tjenester/Terasse/3_CTATerasse";
import { Header } from "../../components/2_Store/Header";

export const HomePage = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Header />
      <Navbar />
      {/* <HeroTerasse /> */}
      <IntroTerasse />
      <HuskelisteTerasse />
      <CTATerasse />
      <Footer />
    </>
  );
};

export default HomePage;
