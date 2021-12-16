import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const style = {
  header: {
    background: "red",
    width: 300,
    height: 200,
  },
};
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const appearOpen = isOpen ? "open" : "";
  useEffect(function mount() {
    function onScroll(e) {
        const window = e.currentTarget;
        if (window.scrollY !== 0) {
          setIsScroll(true)
        } else{
          setIsScroll(false)
        }
    }
    window.addEventListener("scroll", onScroll);
    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });
  const addClass = isScroll ? 'short' : '';
  console.log('appearOpen', isOpen)
  return (
    <>
      <header className={`header ${addClass}`}>
        <div className="container">
          <a
            href="/"
            className={`logo ${appearOpen}`}
            aria-label="VenusLab Logo"
            alt="VenusLab Logo"
          ></a>
          <button
            aria-label="Main Menu"
            onClick={() => setIsOpen(!isOpen)}
            className={`menu-button ${appearOpen}`}
          >
            <div className="menu menu-top"></div>
            <div className="menu menu-middle"></div>
            <div className="menu menu-bottom "></div>
          </button>
          <Nav appearOpen={appearOpen} />
        </div>
      </header>
      <style jsx>
        {`
        header.short.header {
          background-color: #222D;
      }
          header {
            --header-ease: var(--ease);
            --nav-ease: var(--accelerate-ease);
            position: fixed;
            z-index: 9;
            top: 0;
            left: 0;
            width: 100%;
            height: var(--header-height);
            background-color: var(--dark);
            transition: height 0.6s var(--header-ease),
              background-color 0.6s var(--header-ease);
          }
          .container {
            width: 100%;
            max-width: var(--mega-width);
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            transition: padding 0.6s var(--header-ease);
          }
          .logo {
            width: 150px;
            height: 58px;
            background-image: url(https://venuslab.co/icons/logo.svg);
            background-size: 90%;
            background-repeat: no-repeat;
            background-position: left top;
            display: block;
            color: transparent;
            transition: transform 0.6s var(--nav-ease);
          }
          .menu {
            pointer-events: none;
            width: 20px;
            height: 2px;
            background-color: #fff;
            transition: transform 0.4s var(--ease),
              width 0.45s var(--accelerate-ease);
          }
          .menu-top {
            transform: translate(0, -4px);
          }
          .open .menu-top {
            transform: translate(0, 2px) rotate(135deg);
          }
          .menu-bottom {
            transform: translate(0, 4px);
          }
          .open .menu-bottom {
            transform: translate(0, -2px) rotate(-135deg);
          }
          .open .menu-middle {
            width: 0;
          }
          .menu-button {
            width: 34px;
            height: 34px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          @media (min-width: 992px) {
            .logo {
              width: 190px;
              height: 70px;
              transition: all 0.6s var(--header-ease);
            }
            .menu-button {
              display: none;
            }
            header.short {
              height: 80px;
          }
          }
          @media (min-width: 1200px) {
            .container {
              padding: 0 40px;
            }
          }
          @media (max-width: 991px) {
            .logo.open {
              transform: translate(calc(50vw - 90px), 20px);
            }
          }
        `}
      </style>
    </>
  );
}
