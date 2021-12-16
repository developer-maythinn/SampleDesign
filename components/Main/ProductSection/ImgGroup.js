import React from "react";
import { useInView } from "react-intersection-observer";


export default function ImgGroup(props) {
  const { item } = props;
  const { ref, inView, entry } = useInView({
    threshold: [0.1, 0.2, 0.3, 0.5, 0.6, 0.75],
  });
  // console.log(inView, entry && entry.intersectionRatio)
  const startScaleAnimate = inView ? 'scaleAnimate' : '';
  const startMoveAnimate = inView ? item.direction === "left" ? 'moveToLeftAnimate' : 'moveToRightAnimate' : '';
  return (
    <>
      <article className="img-gp" ref={ref}>
        <div className="img-container">
          <div
            className={`circle ${startScaleAnimate}`}
            style={{
              backgroundImage: `linear-gradient(${item.gradient})`,
            }}
          ></div>
          <div className={`mocup ${startMoveAnimate}`}>
            <div className="image" style={{ backgroundImage: `url(${item.image})`}}></div>
          </div>
        </div>
      </article>
      <style jsx>{`
        .img-gp {
          --size: 90%;
          width: var(--size);
          height: 0;
          padding-top: var(--size);
          position: relative;
        }
        .img-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .circle {
          width: 65%;
          height: 65%;
          border-radius: 100%;
        }
        .mocup {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          transform: translate(0px, 0px) scale(1);
        }
       
        .image {
          width: 100%;
          height: 100%;
          background-size: 85%;
          background-repeat: no-repeat;
          background-position: center;
        }
        .moveToRightAnimate{
          animation: moveToRightImg 1s;
        }
        .moveToLeftAnimate{
          animation: moveToLeftImg 1s;
        }
        .scaleAnimate{
          animation: scaleAnimate 1.5s;
        }
        @media (min-width: 768px) {
          .img-gp {
            --size: 50%;
          }
        }
        @keyframes scaleAnimate {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes moveToLeftImg {
            from{
              transform: translate(200.6px, 297.6px) scale(1.6739130434782608);
            }
            to{
              transform: translate(0px, 0px) scale(1);
            }
        }
        @keyframes moveToRightImg {
          from{
            transform: translate(-200.6px, 297.6px) scale(1.6739130434782608);
          }
          to{
            transform: translate(0px, 0px) scale(1);
          }
      }
      `}</style>
    </>
  );
}
