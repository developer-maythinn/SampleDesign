import React from "react";

const items = [
  {
    image: "https://venuslab.co/icons/web-development.svg",
    title: "Commercial Websites & Web Application",
    description:
      "From corporate website to enterprise-level custom web applications and anything in between, our experienced designers and engineers will develop the solutions to solve your problems, deliver the products you need, and bring your ideas to life.",
  },
  {
    image: "https://venuslab.co/icons/mobile-development.svg",
    title: "Mobile Application Developemnt",
    description:
      "Mobile applications are essential for your business to reach out and retain customers, achieve competitive advantage, and increase the efficiency of internal operation. Our experienced mobile engineers are ready to help you accomplish all your objectives.",
  },
  {
    image: "https://venuslab.co/icons/game-development.svg",
    title: "Game Developemnt",
    description:
      "Venus Lab offers comprehensive solutions to help you design, develop your game from start to finish. The team have worked on numerous games for PC, consoles, web and mobile platforms. Our experienced game developers and artists are ready to help you accomplish a successful game.",
  },
  {
    image: "https://venuslab.co/icons/ux-development.svg",
    title: "UI/UX Developemnt",
    description:
      "It's more than beautifying your product. We design for maximum impact, starting with intensive research and user interview to user flow and experience. Our experienced UI & UX Specialists are ready to help you achieve your business goals and exceed your customer’s expectations.",
  },
];
export function Developments() {
  return (
    <>
      {items.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <Development item={item} />
          </React.Fragment>
        );
      })}
    </>
  );
}

export function Development(props) {
  const { item } = props;
  return (
    <>
      <div className="development">
        <section className="dark card">
          <div
            className="illustration web-development"
            style={{
              background: `url(${item.image})`,
            }}
          ></div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </section>
      </div>
      <style>{`
        .developments{
            width: 100%;
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 20px;
        }
        .development {
            width: 100%;
            margin: 40px 0;
        }
        section.card{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
        .illustration {
            width: 60%;
            max-width: 240px;
            height: 0;
            padding-top: 40%;
            background-size: contain!important;
            background-repeat: no-repeat!important;
            background-position: center!important;
        }
        .dark h3, .dark p {
            color: #eee;
        }
        h3, .development p{
            max-width: 500px;
            text-align: center;
        }
        h3 {
            margin: 20px 0;
            font-size: 1.6em;
            padding: 0;
        }
        .development p{
            margin: 0;
        }
        @media (min-width: 768px){
            .developments {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start;
                padding: 20px 40px;
            }
            .development {
                margin: 20px 0;
                width: calc(50% - 20px);
            }
        }
    `}</style>
    </>
  );
}
export default function LastSection() {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          <h2 className="container-title">
            what we can do <br />
            for you or your business
          </h2>
          <div className="developments">
            <Developments />
          </div>
          <div className="let-us-talk">
            <h1>Let's talk</h1>
            <p>
              Wheather you're interested in working with us or for us, we're
              always happy to chat.
            </p>
            <button type="button" aria-label="Request a Quote">
              <span>request a quote</span>
            </button>
          </div>
        </div>
      </section>
      <style>{`
      .wrapper .container {
        width: 100%;
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 60px 0;
        }
        section.wrapper{
            background:linear-gradient(to top , rgba(0,0,0, 0.7), rgba(0,0,0, 0.5)) ,url(https://images.pexels.com/photos/273214/pexels-photo-273214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin-top: -40px;
            clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%);
        }
        h2.container-title{
            font-size: 1.8em;
            font-weight: 800;
            color: var(--primary);
            margin: 40px 0;
            padding: 0 20px;
            text-transform: uppercase;
            text-align: center;
        }
       
        p{
            line-height: 1.4em;
        }

        .let-us-talk {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
        .let-us-talk h1{
            font-size: 3.5em;
            font-weight: 200;
            color: var(--primary);
            text-transform: uppercase;
            margin: 20px 0 0;
        }
        .let-us-talk p{
            max-width: 600px;
            color: #eee;
            text-align: center;
            margin: 20px 20px 40px;
            
        }
        .let-us-talk button {
            font-size: .85em;
            font-weight: 200;
            text-transform: uppercase;
            color: #111;
            width: 180px;
            height: 42px;
            border-radius: 42px;
            background-color: var(--primary);
            position: relative;
            overflow: hidden;
            transition: box-shadow .3s var(--accelerate-ease);
        }
        .let-us-talk button:hover {
            box-shadow: 0 5px 10px rgb(0 0 0 / 12%), 0 5px 5px rgb(0 0 0 / 10%);
        }
        .let-us-talk span {
            position: absolute;
            white-space: nowrap;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, calc(-50% + 1px));
        }
        .let-us-talk button::before {
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
        .let-us-talk button:hover::before {
            transform: translate(-50%, -50%) scale(1);
        }
        @media (min-width: 992px){
            section.wrapper {
                margin-top: -60px;
                clip-path: polygon(0 60px, 100% 0, 100% 100%, 0 100%);
            }
            .wrapper .container {
                padding: 100px 40px;
            }
            h2.container-title {
                font-size: 2em;
            }
            .let-us-talk h1 {
                font-size: 4em;
            }
        }
        `}</style>
    </>
  );
}
