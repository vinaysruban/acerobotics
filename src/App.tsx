import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BsSuitSpadeFill } from "react-icons/bs";
import { Tilt } from "react-tilt";

function App() {
  const blobRef = useRef<HTMLDivElement>(null);

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: false, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: false, // If the tilt effect has to be reset on exit.
  };

  useEffect(() => {
    window.onpointermove = (e) => {
      const { clientX, clientY } = e;
      if (
        blobRef.current &&
        (document.documentElement.scrollTop <
          0.9 * document.documentElement.scrollHeight ||
          document.body.scrollTop < 0.9 * document.documentElement.scrollHeight)
      ) {
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
    };
  }, []);

  return (
    <>
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
      <Navbar />
      <button className=" bg-yellow-300 text-neutral-900 text-[1.5vw] absolute left-[42vw] top-[14.5vw] px-6 py-2 rounded-full font-medium shadow-[0px_0px_28px_0px_rgba(253,_255,_71,_1)] hover:shadow-[0px_0px_36px_0px_rgba(253,_255,_71,_1)] transition-shadow z-10">
        Learn about our robot.
      </button>
      <h1 className="text-[30vw] text-white font-bold mx-auto w-fit leading-[40vw]">
        <Tilt options={defaultOptions} className="inline-block w-min">
          <BsSuitSpadeFill className="inline" />
        </Tilt>
        ce
      </h1>
      <h2 className="text-[2vw] text-neutral-400 font-semibold mx-auto w-fit text-center mt-[2wv]">
        Ace Robotics is an innovation centric FTC team with a big vision for the future.
      </h2>
      <span className="text-neutral-300 mt-[2vw] block text-[3vw] text-center font-bold">
        40:40:40 till the next season.
      </span>
    </>
  );
}

export default App;
