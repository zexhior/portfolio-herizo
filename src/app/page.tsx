"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaJs, FaNode, FaReact } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".profile",
        { scale: 0, transformOrigin: "center 40%", duration: 1 },
        { scale: 1, duration: 1 }
      );
      gsap.from(".last_name", { x: -1000, duration: 2 });
      gsap.from(".first_name", { x: -1000, duration: 2, delay: 1 });
      gsap.fromTo(
        ".detail",
        { opacity: 0, duration: 4, delay: 3 },
        { opacity: 1, duraction: 4, delay: 3 }
      );
    },
    { scope: container }
  );

  return (
    <div className="w-full" ref={container}>
      <div className="pt-24 lg:pt-0 flex flex-wrap w-full lg:h-screen items-center bg-[url('/background.svg')] bg-cover">
        <div className="w-full sm:w-1/2  flex justify-center items-center">
          <div
            className="rounded-full overflow-hidden profile"
            style={{ width: "300px", height: "300px" }}
          >
            <img src="/my_image.jpg" alt={""} height="100%" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-4 overflow-hidden">
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
            <Button className="w-min my-5">
              <Link href={"/contacts"}>Me contacter</Link>
            </Button>
            <div className="flex gap-3 py-3">
              <FaJs size={50} />
              <FaNode size={50} />
              <FaReact size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
