import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { ReactElement } from "react";
import { FaAngular, FaReact } from "react-icons/fa";

type Techno = {
  title: string;
  logo: ReactElement<any, any> | null;
};

type Professional = {
  annee: string;
  poste: string;
  techno: Techno[];
  societe: string;
  detail: string;
  logo: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
};

const ExperiencePage = () => {
  const professionals: Professional[] = [
    {
      annee: "Juin 2021 - Novembre 2021",
      poste: "Développeur Fullstack",
      techno: [
        {
          title: "Angular",
          logo: <FaAngular size={30} color="gray" />,
        },
        {
          title: "Django",
          logo: null,
        },
      ],
      societe: "Association Haikintana",
      detail:
        "Stage de 6 mois à l'association Haikintana en tant que développeur fullstack pour créer une application web pour gérer les membres de l'association, les événements de l'association ainsi que la présence des membres lors des évènements grâce à un scan QRCode.",
      logo: "/logo/haikintana.jpg",
    },
    {
      annee: "Fevrier 2024 - Juillet 2024",
      poste: "Développeur Front-end",
      techno: [
        {
          title: "React",
          logo: <FaReact size={30} color="gray" />,
        },
        {
          title: "Ionic",
          logo: null,
        },
      ],
      societe: "Vatilab",
      detail:
        "Stage de 6 mois dans l'agence de développement web Vatilab en tant que développeur front-end pour aider l'équipe pour la maintenance de l'application web et mobile myBeeDoo.",
      logo: "/logo/vatilab.jpg",
    },
  ];

  const projects: Project[] = [
    {
      title: "Application web Haikintana",
      description:
        "Application web pour gérer les membres de l'association Haikintana",
      image: "/logo/haikintana.jpg",
    },
    {
      title: "SmartLibrary",
      description: "Application web pour lire des livres éléctroniques",
      image: "/logo/smartlibrary.png",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-10 justify-center items-center pb-20 lg:pb-0 md:pt-20 lg:pt-0 lg:h-screen bg-[url('/background.svg')] bg-cover">
        <h2 className="text-4xl font-bold pb-10">
          Mes expériences professionnelles
        </h2>
        {professionals.map((experience: Professional, index: number) => {
          return (
            <div className="pb-20 sm:pb-0 w-4/5 flex flex-col sm:flex-row justify-center">
              <div className="sm:w-1/4 pr-3">
                <h3 className="text-xl font-semibold pb-2">
                  {experience.annee}
                </h3>
              </div>
              <div className="sm:w-3/4 flex flex-col border-l-4 border-slate-500 pl-12">
                <h2 className="text-3xl font-bold pb-2">{experience.poste}</h2>
                <p className="text-justify">{experience.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col items-center ptf-data">
        <h2 className="text-4xl font-bold py-10">Mes réalisations</h2>
        <div className="flex flex-wrap gap-3 p-11">
          {projects.map((projet: Project, index: number) => {
            return (
              <Card className="w-full sm:w-1/4 md:w-1/2 lg:w-1/3" key={index}>
                <CardHeader
                  className="flex justify-center items-center overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={projet?.image}
                    alt={""}
                    width={"100%"}
                    height={"100%"}
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold py-3">{projet.title}</h3>
                  <p>{projet.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
