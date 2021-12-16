import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: BebasNeue;
    src: local("BebasNeue"), url(/fonts/BebasNeue-Light.otf) format("opentype");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: BebasNeue;
    src: local("BebasNeue"), url(/fonts/BebasNeue-Regular.otf) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: BebasNeue;
    src: local("BebasNeue"), url(/fonts/BebasNeue-Bold.otf) format("opentype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: Avenir;
    src: local("Avenir"), url(/fonts/AvenirLTStd-Light.otf) format("opentype");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: Avenir;
    src: local("Avenir"), url(/fonts/AvenirLTStd-Medium.otf) format("opentype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: Avenir;
    src: local("Avenir"), url(/fonts/Avenir-Black.otf) format("opentype");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: GloriaHallelujah;
    src: local("GloriaHallelujah"),
      url(/fonts/GloriaHallelujah-Regular.ttf) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  :root {
    --primary: #EFC30F;
    --dark: #222;
    --success: #27ae60;
    --danger: #f46;
  
    /* Width and Height  */
    --max-width: 1200px;
    --large-width: 1440px;
    --mega-width: 2400px;
    --header-height: 70px;
  
    /* Easing  */
    --ease: cubic-bezier(0.4, 0, 0.2, 1);
    --slow-ease: cubic-bezier(0.5, 0.5, 0.5, 1);
    --declerate-ease: cubic-bezier(0.0, 0.0, 0.2, 1);
    --accelerate-ease: cubic-bezier(0.8, 0, 0.8, 1);
    --bounce-ease: cubic-bezier(0.4, 0, 0.2, 1.4);
  
    --theme: var(--primary);
  }
  @media (min-width: 992px) {
    :root {
      --header-height: 150px;
    }
  }
  @media (min-width: 1400px) {
    :root {
      --max-width: 90vw;
    }
  }
  html, body {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: Avenir;
    color: #333;
  }
  @media (min-width: 1400px) {
    html, body {
      font-size: 18px;
    }
  }
  
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  p {
    line-height: 1.4em;
  }
  a {
    text-decoration: none;
  }
  
  button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
  
  /* ARTICLE */
  .article-title span {
    display: inline-block;
    font-weight: 800;
    font-size: 2em;
    color: var(--primary);
    margin-right: 5px;
  }
  .article-paragraph a {
    color: var(--primary);
    text-decoration: none;
  }
  .article-paragraph .index,
  .article-paragraph .title {
    display: inline-block;
    font-weight: 800;
    font-size: 2.2em;
    color: #ccc;
    margin-right: 5px;
  }
  .article-paragraph .title {
    color: #888;
  }
  
  input[type=text],
  input[type=email],
  input[type=phone],
  input[type=search],
  input[type=password],
  input[type="date"],
  input[type="time"],
  textarea {
    -webkit-appearance: none;
    border-radius: 0;
    font-size: 16px;
    font-family: Avenir;
  }
  select,
  textarea,
  input,
  select:focus,
  textarea:focus,
  input:focus {
    font-size: 16px;
  }
  
  /* mouse, touch pad */
  @media (hover: hover) and (pointer: fine) {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f9f9f9;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--theme);
      outline: none;
    }
  }
          .loaded{
              display: none;
          }
          .loading {
              width: 100%;
              position: fixed;
              z-index: 15;
              top: 0; bottom: 0;
              left: 0; right: 0;
              background-color: var(--dark);
              display: flex;
              justify-content: center;
              align-items: center;
              will-change: clip-path;
              transition: opacity 1.5s var(--slow-ease);
          }
          .loading-container {
              width: 65%;
              max-width: 500px;
              font-family: BebasNeue;
              position: relative;
              transform: translate(-10%, 10%);
          }
          .hello {
              width: 100%;
              height: 0;
              padding-top: 50%;
              background-image: url(https://venuslab.co/images/hello.png);
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
          }
          .loading-text {
              position: absolute;
              z-index: 1;
              top: -50%;
              left: 50%;
              width: 80%;
              height: 100%;
              transform: translate(-50%, 0);
              background-image: url(https://venuslab.co/images/loading.png);
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
          }
          .loading:not(.hide) .loading-text {
              animation: Loading 2s linear infinite;
          }
          .loading-time {
              font-size: 3em;
              font-weight: 600;
              position: inline-block;
              position: absolute;
              top: 0;
              right: 0;
              color: #EFC30F;
              transform: translate(80%, -25%);
              z-index: 1;
          }
          .loading.hide {
              opacity: 0;
              pointer-events: none;
          }
          @media (min-width: 992px) {
              .loading-time {
                  font-size: 8em;
              }
          }
          @keyframes Loading {
              0%, 100% {opacity: 0;}
              50% {opacity: .8;}
          }
          @keyframes Animate {
              from {
                  clip-path: circle(100% at 50% 50%);
              }
              to {
                  clip-path: circle(0% at 50% 50%);
              }
          }
      
         
`;
import React from "react";

export default function GlobalStyle() {
  return <GlobalStyles />;
}
