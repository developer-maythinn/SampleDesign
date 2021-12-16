import styled from "styled-components";
import Header from "/components/Header";
import FirstMainSection from "/components/Main/FirstMainSection";
import ProductSection from "/components/Main/ProductSection";
import LastSection from "/components/Main/LastSection";
import Footer from "/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FirstMainSection />
        <ProductSection />
        <LastSection />
      </main>
      <Footer />
      <style>
        {`
        main{
          width: 100%;
          min-height: 100vh;
        }
        .section.right {
          clip-path: polygon(0 0, 100% 40px, 100% 100%, 0 100%);
        }
        .section {
          width: 100%;
          margin-top: -40px;
          padding: 40px 0;
          background-color: #fff;
          overflow: hidden;
        }
        .section.left {
          clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%); 
        }
        @media (min-width: 992px){
          .section.left {
              clip-path: polygon(0 60px, 100% 0, 100% 100%, 0 100%); 
          }
          .section {
            margin-top: -60px;
            padding: 60px 0;
          }
          .section.right{
            clip-path: polygon(0 0, 100% 60px, 100% 100%, 0 100%);
          }
        }
      `}
      </style>
    </>
  );
}
