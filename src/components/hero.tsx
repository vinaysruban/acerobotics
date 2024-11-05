import { BsSuitSpadeFill } from "react-icons/bs";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { Tilt } from "react-tilt";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import { motion } from "framer-motion";

function Hero() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: false, // If the tilt effect has to be reset on exit.
  };

  gsap.registerPlugin(useGSAP, TextPlugin);
  const container = useRef<HTMLDivElement>(null);

  const wordList: string[] = [
    "innovation",
    "creativity",
    "outreach",
    "community",
    "productivity",
  ];
  wordList.push(wordList[0]);

  useGSAP(
    () => {
      let i = 0;
      for (const word of wordList) {
        gsap.to(".wordCarousel", {
          delay: i,
          duration: 2,
          text: word,
          ease: "none",
          repeat: -1,
          repeatDelay: (wordList.length - 1) * 4,
        });
        if (["a", "e", "i", "o", "u"].includes(word[0])) {
          gsap.to(".wordArticle", {
            delay: i,
            duration: 2,
            text: "an",
            ease: "none",
            repeat: -1,
            repeatDelay: (wordList.length - 1) * 4,
          });
        } else {
          gsap.to(".wordArticle", {
            delay: i,
            duration: 2,
            text: "a",
            ease: "none",
            repeat: -1,
            repeatDelay: (wordList.length - 1) * 4,
          });
        }
        i += 4;
      }
    },
    { scope: container }
  );

  return (
    <>
      <motion.button
        whileHover={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "rgb(253 224 71)",
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          times: [0, 1],
        }}
        className="robotButton border-solid border-[0.2vw] border-yellow-300 bg-yellow-300 text-neutral-900 text-[1.4vw] absolute left-[42vw] top-[8.5vw] px-[2.5vw] py-[0.5vw] rounded-full font-medium shadow-[0px_0px_28px_0px_rgba(253,_255,_71,_1)] hover:shadow-[0px_0px_36px_0px_rgba(253,_255,_71,_1)] transition-shadow z-10">
        Learn about our robot.
      </motion.button>
      {/**<motion.div className="absolute right-[4vw] top-[-20vw]"
        animate={{
          y: ["0vh", "138vh", "139vh"],
          opacity: [1, 1, 0]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}>
          <div className="w-[4vw] aspect-square rounded-full bg-yellow-300"></div>
          <div className="absolute w-0 h-0 border-x-transparent border-x-[2vw] border-b-[4vw] border-b-white right-[0vw] top-[-2vw] blur-2xl"></div>
      </motion.div>**/}
      <section ref={container}>
        <h1
          className="text-[38vw] text-white font-bold mx-auto w-fit leading-[34vw]">
          <Tilt options={defaultOptions} className="inline-block w-min">
            <BsSuitSpadeFill className="inline" />
          </Tilt>
          ce
        </h1>
        <img alt="hello" src="/images/robot1.png" className="w-[40vw] -z-[1] top-[30vw] absolute left-[55%]" />
        <h2 className="text-[1.8vw] text-neutral-200 font-semibold mx-auto w-fit text-center mt-[0.8vw] mb-[1vw]">
          Ace Robotics is <span className="wordArticle">an</span>{" "}
          <span className="text-yellow-300 wordCarousel text-[2vw]">
            innovation
          </span>{" "}
          centric FTC team with a big vision for the future.
        </h2>
        <motion.div
          animate={{
            opacity: [0, 1],
            y: ["10vw", "0vw"]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="mx-auto w-fit mt-[1.6vw]"
        >
          <ul className="flex text-neutral-100 flex-row gap-[4vw] text-[2.2vw] justify-center sm:justify-normal child:border-yellow-400 child:border-b-[0.2vw] child:p-[0.6vw] child:rounded">
            <li className="ml-0">
              <a
                href="https://www.instagram.com/combat_wombats_ftc_aus/"
                aria-label="Check out our Instagram."
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@CombatWombats23335"
                aria-label="Check out our Youtube."
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="mailto: combatwombatsftc@gmail.com"
                aria-label="Get in touch via email."
              >
                <IoMailOpenOutline />
              </a>
            </li>
          </ul>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
