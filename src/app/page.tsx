"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".profile",
        { scale: 0, transformOrigin: "center 40%", duration: 2 },
        { scale: 1, duration: 2 }
      );
      gsap.from(".last_name", { x: -1000, duration: 2 });
      gsap.from(".first_name", { x: -1000, duration: 3, delay: 1 });
      gsap.fromTo(
        ".detail",
        { opacity: 0, duration: 4, delay: 4 },
        { opacity: 1, duraction: 4, delay: 4 }
      );
    },
    { scope: container }
  );

  return (
    <div className="w-full" ref={container}>
      <div className="myself flex w-full h-screen items-center">
        <div className="w-1/2  flex justify-center items-center">
          <div
            className="rounded-full overflow-hidden profile"
            style={{ width: "300px", height: "300px" }}
          >
            <img src="/my_image.jpg" alt={""} height="100%" />
          </div>
        </div>
        <div className="w-1/2 p-4 overflow-hidden">
          <h1 className="text-6xl font-bold py-4 text-slate-500 last_name">
            Bienvenue à vous!
          </h1>
          <h2 className="text-4xl font-semibold text-slate-800 first_name">
            Je m'appelle Herizo
          </h2>
          <div className="flex flex-col gap-1 text-lg py-8 detail">
            <p>
              Je suis développeur web Javascript à Antananarivo, la capitale de
              la merveilleuse île de Madagascar. J'ai codé depuis 3 ans après
              l'obtention de mon diplôme de licence à l'université polytechnique
              de Madagascar. Je suis prêt à concevoir des application web et
              mobile offrant un design impeccable et attraillant avec une
              expérience utilisateur fluide et adapté à votre besoin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
