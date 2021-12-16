import React, { useState } from "react";

const navItems = [
  { name: "Home" },
  { name: "About" },
  { name: "Service" },
  { name: "Portfolios" },
  { name: "Blog" },
  { name: "Contact" },
];
export default function Nav(props) {
  const { appearOpen } = props;
  const [activeLink, setActiveLink] = useState(null);
  const handleClick = (targetItem) => {
    setActiveLink(targetItem);
  };
 console.log(activeLink)
  return (
    <>
      <nav className={appearOpen}>
        <ul>
          {navItems.map((item, i) => {
            return (
              <li key={i}>
                {/* <a href={`/${item.name}`} onClick={(e) => console.log(e.target)} target="_blank"> */}
                <a
                  href="#"
                  className={
                    activeLink === item.name || activeLink === "Home" || appearOpen
                      ? "active"
                      : ""
                  }
                  onClick={(e) => handleClick(e.target.innerText)}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
          <li className={`btn-container ${appearOpen}`}>
            <button aria-label="Request a Quote">
              <span className="btn-text">request a qoute</span>
            </button>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          ul {
            list-style-type: none;
          }
          li {
            height: 40px;
            margin-left: 20px;
          }
          .active {
            color: var(--primary);
          }
          a {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 0.9em;
            padding: 5px 10px 0;
            position: relative;
          }
          a:hover::before {
            width: calc(100% - 25px);
          }
          a::before {
            content: "";
            display: block;
            width: 0;
            height: 1px;
            background-color: #fff9;
            position: absolute;
            left: 50%;
            bottom: 10px;
            transform: translate(-50%, 0);
            transition: all 0.6s var(--accelerate-ease);
          }
          a:hover::before {
            width: calc(100% - 25px);
          }

          @media (min-width: 992px) {
            ul {
              display: flex;
              justify-content: flex-end;
              align-items: center;
            }
            .btn-container {
              margin-left: 30px;
            }
            button {
              font-size: 0.85em;
              font-weight: 200;
              text-transform: uppercase;
              color: #111;
              width: 180px;
              height: 42px;
              border-radius: 42px;
              background-color: var(--primary);
              position: relative;
              overflow: hidden;
            }
            .btn-text {
              position: absolute;
              white-space: nowrap;
              z-index: 1;
              top: 50%;
              left: 50%;
              transform: translate(-50%, calc(-50% + 1px));
            }
            button::before {
              content: '';
              display: block;
              position: absolute;
              z-index: 0;
              top: 50%;
              left: 50%;
              width: 174px;
              height: 36px;
              background-color: #fff;
              border-radius: 42px;
              transform: translate(-50%, -50%) scale(0);
              transition: transform .4s var(--accelerate-ease);
          }
            button:hover::before {
              -webkit-transform: translate(-50%,-50%) scale(1); 
              -ms-transform: translate(-50%,-50%) scale(1);
               transform: translate(-50%,-50%) scale(1); 
          }
            button:hover {
              font-size: 0.85em;
              font-weight: 200;
              text-transform: uppercase;
              color: #111;
              width: 180px;
              height: 42px;
              border-radius: 42px;
              background-color: var(--primary);
              position: relative;
              overflow: hidden;
            }
            button::before {
              content: "";
              display: block;
              position: absolute;
              z-index: 0;
              top: 50%;
              left: 50%;
              width: 174px;
              height: 36px;
              background-color: #fff;
              border-radius: 42px;
              transform: translate(-50%, -50%) scale(0);
              transition: transform 0.4s var(--nav-ease);
            }
            button:hover::before {
              transform: translate(-50%, -50%) scale(1);
            }
          }
          @media (max-width: 991px) {
            ul {
              width: 100%;
              height: 100%;
              padding: calc(var(--header-height) + 40px) 20px;
              overflow-y: auto;
            }
            li {
                height: 40px;
                margin-left: 0px;
              }
            nav {
              position: fixed;
              z-index: -1;
              top: 0;
              right: 0;
              width: 100%;
              height: 0;
              background-color: var(--dark);
              pointer-events: none;
              overflow: hidden;
              transition: all 0.6s var(--nav-ease);
            }
            nav.open {
              width: 100%;
              height: 100%;
              pointer-events: auto;
            }
            .btn-container {
              width: 100%;
              height: 54px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              z-index: 1;
              left: 0;
              bottom: 0;
              opacity: 0;
              transition: opacity 0.4s var(--nav-ease);
            }
            .btn-container.open {
              opacity: 1;
              transition: opacity 0.4s var(--nav-ease) 0.2s;
            }
            button {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #111;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 400;
                font-size: .9em;
                padding-top: 4px;
                background-color: var(--primary);
            }
            li {
                width: 100%; 
                height: 60px;
            }
            li a {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                text-decoration: none;
                text-transform: capitalize;
                font-weight: 400;
                font-size: 1.6em;
                padding: 0 10px;
            }
          }
        `}
      </style>
    </>
  );
}
