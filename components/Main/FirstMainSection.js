import React from "react";

export default function FirstMainSection() {
  return (
    <>
      <section className="first-section">
        <div className="container">
          <h1>
            <small>idea to</small>
            <strong>impact</strong>
          </h1>
          <p>Risk-free mobile and web development</p>
        </div>
      </section>
    
      <style jsx>{`
        .first-section {
          width: 100%;
          height: 100vh;
          max-height: 1000px;
          background-color: var(--dark);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--header-height) 0 80px;
        }
        .container {
          width: 100%;
          max-width: var(--max-width);
          padding: 20px;
          margin: 0 auto;
        }
        h1 {
          font-family: BebasNeue;
          font-size: 8em;
          color: var(--primary);
          margin: 0;
        }
        h1 small {
          font-weight: 200;
          display: block;
          font-size: 0.8em;
          line-height: 0.6em;
          padding-left: 3px;
        }
        h1 strong {
          line-height: 0.8em;
          font-weight: 600;
        }
        p {
          color: #fff;
          margin: -1.8rem 0 0;
          padding: 0;
          font-size: 1.2em;
          padding: 0 3px;
        }
        @media (min-width: 768px) {
          .container {
            padding: 20px 40px;
          }
          h1 {
            font-size: 24vw;
          }
        }
        @media (min-width: 992px) {
          h1 {
            font-size: 16vw;
          }
          h1 small {
            line-height: 0.5em;
          }
          h1 strong {
            line-height: 0.5em;
          }
          p {
            margin-top: -4vw;
            font-size: 1.4em;
            padding: 0 5px;
          }
        }
      `}</style>
    </>
  );
}
