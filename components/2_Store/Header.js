import { Layout } from "../1_Små/Base";

export const Header = () => {
  return (
    <header className="text-label text-hvit bg-cta">
      <Layout>
        <div class="flex py-8 justify-between">
          <div className="flex self-center">
            5 av 5 stjerner på Google -{"  "}
            <span className="font-semibold"> Oslo Snekker'n</span>
          </div>
          <div className="hidden lg:flex">
            <div>
              <a
                href="mailto:oslosnekkern@mail.com"
                className="text-label hover:underline"
              >
                E-post:{" "}
                <span className="font-semibold">oslosnekkern@mail.com</span>
              </a>
            </div>
            <div className="ml-16">
              <a
                href="tel:(+47)90175235"
                className="text-label hover:underline"
              >
                Telefon:{" "}
                <span className="font-semibold">(+47) 90 17 52 35</span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </header>
  );
};
