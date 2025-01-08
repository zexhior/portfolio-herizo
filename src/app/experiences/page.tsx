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
      <div className="w-full p-20 flex justify-center items-start h-screen bg-[url('/background.svg')] bg-cover">
        {professionals.map((experience: Professional, index: number) => {
          return (
            <div className="w-1/2">
              <h1 className="text-3xl font-bold pb-2">{experience.poste}</h1>
              <h2 className="text-xl font-semibold pb-2">{experience.annee}</h2>
              <p className="w-3/4 text-justify">{experience.detail}</p>
              <img src={experience.logo} alt="logo" width={300} height={300} />
            </div>
          );
        })}
      </div>
      <div className="w-full ptf-data flex flex-wrap gap-3 p-11">
        {projects.map((projet: Project, index: number) => {
          return (
            <Card className="w-1/3" key={index}>
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
  );
};

export default ExperiencePage;
