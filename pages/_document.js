import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <title>VenusLab</title>
          <meta name="author" content="VenusLab Team" />
          <meta
            name="description"
            content="Venuslab is a group of well-experienced and highly-trained professional from myanmar. 
            We provide Web Developing, Applications Developing, Customized Software Developing such as CRM, 
            Online Booking System, Customer Loyalty Program and even Augmented Reality (AR). 
            And we support digital transformation to any type of businesses with our extensive experiences in the respective industry. 
            So, we are like best Web and Apps Developing company in Myanamr."
          />
          <meta
            name="keywords"
            content="Web Developing Myanmar, Apps Developing Myanmar, Software Developing Myanmar, 
            Myanmar IT Solutions, CRM, Customized Software, Online Booking System, Customer Loyalty Program, Augmented Reality"
          />
          <meta property="og:title" content="VenusLab" />
          <meta
            property="og:description"
            content="Venuslab is a group of well-experienced and highly-trained professional from myanmar. 
            We provide Web Developing, Applications Developing, Customized Software Developing such as CRM, 
            Online Booking System, Customer Loyalty Program and even Augmented Reality (AR). 
            And we support digital transformation to any type of businesses with our extensive experiences in the respective industry. 
            So, we are like best Web and Apps Developing company in Myanamr."
          />
          <meta property="og:url" content="https://venuslab.co/" />
          <meta
            property="og:image"
            content="https://venuslab.co/advertisement.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="VenusLab" />
          <meta name="theme-color" content="#EFC30F" />
          <link
            rel="icon"
            type="image/png"
            href="https://venuslab.co/favicon.ico"
          />
          <link rel="stylesheet" href="/css/style.css"></link>
        </Head>
        <body>
          <div className="loading">
            <div className="loading-container">
              <div className="hello"></div>
              <div className="loading-text"></div>
              <div className="loading-time"></div>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
