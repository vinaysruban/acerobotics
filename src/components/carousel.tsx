import { useRef } from "react";
import { motion } from "framer-motion"

function Carousel({ vertical }: { vertical: number }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  console.log(vertical)


  return (
    <>
      <div
        className="wrapper h-full w-screen mt-[12vw] overflow-hidden cursor-grab"
      >
        <motion.div className="inner flex gap-12 w-fit" ref={sliderRef} >
          {[...Array(14)].map((_, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(/images/slideshow/${(index % 7) + 1}.webp)`,
              }}
              className={`box aspect-[5/4] rounded-xl min-w-[24vw] pointer-events-none select-none w-[20vw] bg-cover`}
            ></div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Carousel;
