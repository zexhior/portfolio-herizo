"use client";

import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject, useRef } from "react";

type Formation = {
  image: string;
  title: string;
  description: string;
};

const EtudePage = () => {
  const formations: Formation[] = [
    {
      image: "/logo/logo_ispm.png",
      title: "Diplome de licence - 2023",
      description:
        "Preparation en cours du diplôme de master en Informatique et Télécommunication à l'Institut Supérieur Polytechnique de Madagascar",
    },
    {
      image: "/logo/logo_ispm.png",
      title: "Diplome de licence - 2020",
      description:
        "Obtention de diplôme de licence en Informatique et Télécommunication à l'Institut Supérieur Polytechnique de Madagascar",
    },
    {
      image: "",
      title: "Bacclauréat - 2016",
      description: "Obtention du diplôme de bacclauréat série D",
    },
  ];

  gsap.registerPlugin(useGSAP);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (container) {
        const cards = container?.current?.querySelectorAll(".card");
        cards?.forEach((item: Element, index: number) => {
          const element: HTMLDivElement = item as HTMLDivElement;
          gsap.fromTo(
            item,
            {
              x: element.clientWidth,
              duration: 1,
              delay: cards.length - index,
            },
            { x: 0, duration: 1, delay: cards.length - index }
          );
        });
      }
    },
    { scope: container }
  );

  return (
    <div
      className="w-full flex flex-col pb-10 lg:pb-0 sm:flex-row px-2 gap-5 bg-[url('/background.svg')] bg-cover lg:h-screen md:overflow-hidden"
      ref={container}
    >
      <div className="w-full sm:w-1/2 py-20 sm:py-0 px-6 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-start pt-20">
          <h3 className="font-bold text-3xl py-3">Formations</h3>
          <p className="text-lg">
            J'ai eu l'opportunité de passer mes 5 merveilleurses années d'étude
            à l'Institut Supérieur Polytechnique de Madagascar. Suivant le
            système LMD, j'ai pu à la fois faire de recherche personnel en étant
            supervisé par les professeurs à l'université. J'ai pu aiguisé mes
            compétences dans la résolution de problème complexe{" "}
          </p>
          <img
            src="/logo/logo_ispm.png"
            className="rounded-full"
            alt="ISPM"
            width={"300px"}
            height={"300px"}
          />
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col sm:justify-center items-end gap-3">
        {formations.map((formation: Formation, index: number) => {
          return (
            <Card
              className="w-full lg:w-3/4 p-3 hover:bg-slate-100 hover:cursor-pointer card"
              key={index}
            >
              <CardContent>
                <div
                  className=" flex items-start gap-3 border-b-1 border-b-slate-500"
                  key={index}
                >
                  <div className="">
                    <h3 className="text-xl font-semibold">{formation.title}</h3>
                    <p>{formation.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default EtudePage;
