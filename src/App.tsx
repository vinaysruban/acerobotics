import { useEffect, useRef, useState } from "react";
import Navbar from "./components/layouts/navbar";
import Hero from "./components/hero";
import { AOSInit } from "./components/aos";
import Carousel from "./components/carousel";
import QuickNav from "./components/quicknav";


function App() {
  const blurRef = useRef<HTMLDivElement>(null);
  const [vertical, setVertical] = useState(0);

  useEffect(() => {
    window.onpointermove = (e) => {
      const { clientX, clientY } = e;
      if (blurRef.current) {
        blurRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${window.scrollY + clientY}px`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
    };
  }, []);

  function wheelEvent(e: any) {
    setVertical(e.deltaY)
  }


  return (
    <div onWheel={wheelEvent}>
      <AOSInit />
      <div className="bg-[white] h-[34vw] aspect-[1] absolute animate-[rotate_20s_infinite] opacity-40 z-[-2] blur-[12vmax] rounded-[50%] left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]" id="blur" ref={blurRef}></div>
      <Navbar />
      <Hero />
      <Carousel vertical={vertical} />
    </div>
  );
}

export default App;
