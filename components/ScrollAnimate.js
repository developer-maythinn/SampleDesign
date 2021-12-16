import React from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimate() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <>
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
        {/* {console.log(inView)} */}
      </div>
      <style>{`

        `}</style>
    </>
  );
}
