import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import ExpressJS from "@/assets/images/techno/ExpressJS.svg";
import ReactJS from "@/assets/images/techno/ReactJS.svg";
import NextJS from "@/assets/images/techno/NextJS.svg";
import Javascript from "@/assets/images/techno/Javascript.svg";
import Typescript from "@/assets/images/techno/Typescript.svg";
import HTML from "@/assets/images/techno/HTML5.svg";
import CSS from "@/assets/images/techno/CSS3.svg";
import Tailwind from "@/assets/images/techno/TailwindCSS.svg";
import Go from "@/assets/images/techno/Go.svg";
import MongoDB from "@/assets/images/techno/MongoDB.svg";
import Bash from "@/assets/images/techno/Bash.svg";
import Cmake from "@/assets/images/techno/Cmake.svg";
import Bulma from "@/assets/images/techno/Bulma.svg";
import MySQL from "@/assets/images/techno/MySQL.svg";
import MariaDB from "@/assets/images/techno/MariaDB.svg";
import Cpp from "@/assets/images/techno/C++.svg";
import C from "@/assets/images/techno/C.svg";
import FramerMotion from "@/assets/images/techno/FramerMotion.svg";

const CompanyLogoData: Array<{ src: any; alt: string }> = [
  { src: ExpressJS, alt: 'Express Logo' },
  { src: ReactJS, alt: 'React Logo' },
  { src: NextJS, alt: 'Next Logo' },
  { src: Javascript, alt: 'Javascript Logo' },
  { src: Typescript, alt: 'Typescript Logo' },
  { src: HTML, alt: 'HTML Logo' },
  { src: CSS, alt: 'CSS Logo' },
  { src: Tailwind, alt: 'Tailwind Logo' },
  { src: Go, alt: 'Go Logo' },
  { src: MongoDB, alt: 'Mongo Logo' },
  { src: Bash, alt: 'Bash Logo' },
  { src: Cmake, alt: 'Cmake Logo' },
  { src: Bulma, alt: 'Bulma Logo' },
  { src: MySQL, alt: 'MySQL Logo' },
  { src: MariaDB, alt: 'MariaDB Logo' },
  { src: Cpp, alt: 'C++ Logo' },
  { src: C, alt: 'C Logo' },
  { src: FramerMotion, alt: 'Framer Logo' },
];

const InfiniteScrollingLogosAnimation = () => {
  return (
      <div className="container p-10">
          <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
            <motion.div
              transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
              }}
              initial={{ translateX: 0 }}
              animate={{ translateX: '-50%' }}
              className="flex flex-none gap-16 pr-16"
            >
              {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                  {CompanyLogoData.map(({ src, alt }) => (
                    <Image
                      key={alt}
                      src={src}
                      alt={alt}
                      className="h-10 w-auto flex-none"
                    />
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
  )};

  export default InfiniteScrollingLogosAnimation;
