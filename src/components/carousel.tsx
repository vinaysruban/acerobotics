import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion"


function Carousel({ vertical }: { vertical: number }) {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [currentX, setCurrentX] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  //const [scrollAmount, setScrollAmount] = useState()

  useEffect(() => {
    console.log(vertical)
    console.log(currentX)
    if (sliderRef.current)
      setSliderWidth(sliderRef.current?.clientWidth)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentX < sliderWidth) setCurrentX((x) => x += 60)
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="text-white max-w-[42vw] flex gap-[4vw] mx-auto mt-[8vw]">
        <p className="text-[1.5vw] mt-[1vw] font-extralight">WORK</p>
        <h2 className="text-[2.5vw]">WE'RE ALWAYS DOING SOMETHING, WHETHER IT BE <strong>CRE<span className=" text-yellow-300">A</span>TING</strong>, <strong><span className="text-yellow-300">C</span>ODING</strong> OR <strong>OUTR<span className="text-yellow-400">E</span>ACH!</strong></h2>
      </div>
      <div
        className="wrapper h-full w-screen mt-[8vw] overflow-hidden cursor-grab rotate-3"
      >
        <motion.div
          drag="x"
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 18 }}
          dragConstraints={{
            left: -(sliderWidth - window.innerWidth) + sliderWidth / 7,
            right: 0,
          }}
          animate={{
            translateX: -scrollYProgress.get() * 1000
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="inner flex gap-12 w-fit"
          ref={sliderRef} >
          {[...Array(14)].map((_, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(/images/slideshow/${(index % 7) + 1}.webp)`,
              }}
              className={`box aspect-[5/4] rounded-[2vw] min-w-[32vw] pointer-events-none select-none bg-cover`}
            ></div>
          ))}
        </motion.div>
      </div>



    </>
  );
}

export default Carousel;



//      <hr className="bg-[url('/images/hawk1.svg')] mt-[12vw] bg-cover bg-no-repeat border-none h-[10vw] w-full" /><h2 className="text-[8vw] text-white font-bold ml-[14vw] mt-[4vw]">We're up to <br /><span className="ml-[8vw]">something!</span></h2>
