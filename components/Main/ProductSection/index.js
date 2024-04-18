import React from "react";
import ImgGroup from "./ImgGroup";
import TextGroup from "./TextGroup";

const items = [
  {
    backgroundColor: "#fff",
    direction: "left",
    logo: "/img/mobile1.png",
    title: "In-House",
    shortDescription: "e-commerce, android, ios, web app",
    description:
      "The convenience brings the highest satisfaction for users. Inhouse furniture mobile app and website provide a delightful and effortless experience all loyal Inhouse customers. Implemented with Laravel, Vue.js, and fully integrated with SAP ERP, all customers can simply get points after every purchase and use that points as discounts. The customers don’t need to worry about losing paper vouchers too, After scanning the user’s QR code on mobile app or website, their purchased furniture get warranties and will be shown on the app. Own customized Content Management System is included and can show various with various layouts without writing a script.",
    image: "/img/mobile1.png",
    gradient: "30deg, #85764D, #FFE1A0",
    darkMode: false,
  },
  {
    backgroundColor: "#202020",
    direction: "right",
    logo: "/img/mobile1.png",
    title: "Mandalay RUM",
    shortDescription: "android, ar, web",
    description:
      "Mandalay wants to give its users the pleasure of flawless AR experience. The web and mobile app allow demonstrating to the customer to see the animation of scanning Mandalay Rum bottles. Users can feel the AR experience with any phone - iOS or Android. The company can upload animation videos and labels and define the matching video and label. Currently, they started with 2 labels and 2 animation videos. We used unity and javascript libraries and tested with nearly 100 mobile phone brands. Mandalay got thousands of positive engagements from its customers. Mandalay was also satisfied with the simple and innovative way to increase customer engagement.",
    image: "/img/mobile1.png",
    gradient: "-30deg, #0B0B0B, #6D24DE",
    darkMode: true,
  },
  {
    backgroundColor: "#085260",
    direction: "left",
    logo: "/img/mobile1.png",
    title: "MeePyaTike",
    shortDescription: "website, online forum, ui & ux",
    description:
      "Mee Pya Tike wanted to create a website that provides coaching, emotional management for stressful people, and one by one real-time empathetic listening live chat. Our task was to create an online system for this real-time live chat, forum, and membership system. The supporters/social listeners and users can do one by one chatting and forum anonymously on the website. Although it’s a website, it gives a mobile app feeling. We developed a progressive web app for them. Starting a live chat is easy. The system automatically searches available supporter and assign for the chat. The supporter will get a notification when there is a user. The admin gets a real-time dashboard for managing the chats.",
    image: "/img/mobile1.png",
    gradient: "30deg, #004F73, #40BAD2",
    darkMode: true,
  },
  {
    backgroundColor: "#2EA7D7",
    direction: "right",
    logo: "/img/mobile1.png",
    title: "MyanmarAPN",
    shortDescription: "Internet Service Management System",
    description:
      "It’s a nightmare for an ISP without a proper online system to manage the whole office. From getting a sale leads to assigning an engineer to install the internet plan to invoicing the bill, MyanmarAPN needs an all-in-one system. The biggest challenge is implementing a hardware integrated system with Huawei & Mikrotik routers. MyanmarAPN wants a simple graphical user interface to set, change the bandwidth plan for users. Our system includes not only simple CRUD stuff but hardware integrations. Our system reaches our client’s main goal. It transforms manual processes and multiple spreadsheets into a single centralized system. It allows engineers, customer supports, sales representatives, managers, directors to work, monitor, and analyze efficiently without having long meetings. Moreover, customers can upgrade bandwidth plans. check billing info, rewards to redeem, promotions in the mobile app.",
    image: "/img/mobile1.png",
    gradient: "-30deg, #0086ac, #40BAD2",
    darkMode: true,
  },
];

export default function ProductSection() {
  return (
    <>
      {items.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <Product item={item} />
          </React.Fragment>
        );
      })}
    </>
  );
}

export function Product(props) {
  const { item } = props;

  return (
    <>
      <section
        className={`section ${item.direction}`}
        style={{ background: item.backgroundColor }}
      >
        <div className="main-container">
          <ImgGroup item={item} />
          <TextGroup item={item} />
        </div>
      </section>

      <style jsx>{`
        .main-container {
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        @media (min-width: 992px) {
          .main-container {
            flex-direction: row;
            justify-content: space-between;
          }
          .section.left .main-container {
            flex-direction: row-reverse;
          }
        }
        @media (min-width: 768px) {
          .main-container {
            padding: 20px 40px;
          }
        }
      `}</style>
    </>
  );
}
