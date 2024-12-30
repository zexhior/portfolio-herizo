"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Home = () => {
  // gsap.registerPlugin(useGSAP);

  const container = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.to(".box", { x: 360 });
  //   },
  //   { scope: container }
  // );

  return (
    <div className="w-full" ref={container}>
      {/* <div
        className="box"
        style={{ width: "300px", height: "100px", background: "blue" }}
      ></div> */}
      <div className="myself flex w-full h-screen items-center">
        <div className="w-1/2  flex justify-center items-center">
          <div
            className="rounded-full overflow-hidden"
            style={{ width: "300px", height: "300px" }}
          >
            <img src="/my_image.jpg" alt={""} height="100%" />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <h1 className="text-6xl font-bold py-4 text-slate-500">
            RASOLONJATOVO
          </h1>
          <h2 className="text-4xl font-semibold text-slate-800">
            Brice Herizo
          </h2>
          <div className="flex flex-col gap-1 text-lg py-8">
            <p>Développeur web</p>
            <p>Javascript - Typescript - Python</p>
            <p>React - Next</p>
            <p>Node/Express - Django</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
