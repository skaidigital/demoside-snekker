import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const GA_MEASUREMENT_ID = "GA_MEASUREMENT_ID";
    return (
      <Html>
        <Head>
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          dangerouslySetInnerHTML=
          {{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }} */}
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="\poppins-v15-latin-700.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="\poppins-v15-latin-700.woff"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="\poppins-v15-latin-500.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="\poppins-v15-latin-500.woff"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="\poppins-v15-latin-regular.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            href="\poppins-v15-latin-regular.woff"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
