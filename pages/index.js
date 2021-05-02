import { NextSeo } from "next-seo";
import { Navbar } from "../components/2_Store/Navbar";
import { Footer } from "../components/2_Store/Footer";
import { HeroHjemmeside } from "../components/3_Sider/0_Hjemmeside/0_HeroHjemmeside";
import { HvorforVelgeHjemmeside } from "../components/3_Sider/0_Hjemmeside/3_HvorforVelgeHjemmeside";
import { AnmeldelserHjemmeside } from "../components/3_Sider/0_Hjemmeside/4_AnmeldelserHjemmeside";
import { TjenesterHjemmeside } from "../components/3_Sider/0_Hjemmeside/5_TjenesterHjemmeside";
import { Header } from "../components/2_Store/Header";
import UnderHeroHjemmeside, {
  CTAHjemmeside,
} from "../components/3_Sider/0_Hjemmeside/1_CTAHjemmeside";
import RatingsHjemmeside from "../components/3_Sider/0_Hjemmeside/2_RatingsHjemmeside";

export const HomePage = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Header />
      <Navbar />
      <HeroHjemmeside />
      <CTAHjemmeside />
      <RatingsHjemmeside />
      <HvorforVelgeHjemmeside />
      <AnmeldelserHjemmeside />
      <TjenesterHjemmeside />
      <Footer />
    </>
  );
};

export default HomePage;
