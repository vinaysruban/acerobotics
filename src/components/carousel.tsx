import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion"

function Carousel({ vertical }: { vertical: number }) {
  const [sliderWidth, setSliderWidth] = useState(0)
  //const [currentX, setCurrentX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (sliderRef.current)
      setSliderWidth(sliderRef.current?.clientWidth)
  })


  return (
    <>
      <div
        className="wrapper h-full w-screen mt-[4vw] overflow-hidden cursor-grab rotate-3"
      >
        <motion.div
          drag="x"
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 18 }}
          dragConstraints={{
            left: -(sliderWidth - window.innerWidth),
            right: 0,
          }}
          animate={{
            x: -scrollYProgress.get() * 1000
          }}
          className="inner flex gap-12 w-fit"
          ref={sliderRef} >
          {[...Array(14)].map((_, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(/images/slideshow/${(index % 7) + 1}.webp)`,
              }}
              className={`box aspect-[5/4] rounded-[2vw] min-w-[26vw] pointer-events-none select-none bg-cover`}
            ></div>
          ))}
        </motion.div>
      </div>
      <h2 className="text-[8vw] text-white font-bold ml-[14vw] mt-[4vw]">We're up to <br /><span className="ml-[8vw]">something!</span></h2> 
    </>
  );
}

export default Carousel;
