import React from "react";

export default function TextGroup(props) {
  const { item } = props;
  return (
    <>
      <article className={item.darkMode ? 'dark': ''}>
        <div
          className="logo"
          style={{
            backgroundImage:
              `url(${item.logo})`,
          }}
        ></div>
        <h2>{item.title}</h2>
        <small>{item.shortDescription}</small>
        <p>{item.description}</p>
        <div className="button-container">
          <button aria-label="Load More">
            more <div className="icon"></div>
          </button>
        </div>
      </article>
      <style jsx>{`
        .logo {
          width: 140px;
          height: 46px;
          background-size: contain;
          background-position: left center;
          background-repeat: no-repeat;
        }
        h2 {
          font-size: 2.8em;
          font-weight: 800;
          color: #111;
          margin: 0;
          padding: 0;
        }
        small {
          letter-spacing: 2px;
          font-size: 80%;
        }
        p {
          line-height: 1.4em;
          margin: 1em 0px;
        }
        .button-container {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding: 20px;
        }
        button {
          font-family: "Avenir";
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #eee;
            height: 42px;
            border-radius: 42px;
            padding: 2px 30px 0;
            color: #111;
            text-decoration: none;
            font-size: .85em;
            letter-spacing: 2px;
            transition: box-shadow .3s var(--ease);
        }
        button:hover {
            box-shadow: 0 5px 10px rgb(0 0 0 / 12%), 0 5px 5px rgb(0 0 0 / 10%);
        }
        button:hover .icon {
          transform: translate(5px, 0);
      }
        .icon {
            width: 16px;
            height: 16px;
            margin-left: 5px;
            background-image: url(https://venuslab.co/icons/arrow.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            transform: translate(0, 0);
            transition: transform .3s var(--ease);
        }
        .dark, .dark h2, .dark p {
          color: #fff;
      }
        @media (min-width: 992px) {
          article {
            width: 50%;
          }
          h2 {
            font-size: 3.6em;
          }
          .button-container {
            padding: 20px 40px 0;
        }
        }
      `}</style>
    </>
  );
}
