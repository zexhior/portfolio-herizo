"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaAngular, FaNode, FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { ButtonComponent } from "@/components/button/button";
import { Badge } from "@/components/ui/badge";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";

const Home = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);
  const [index, setIndex] = useState(0);
  const textMain = ["Bienvenue à vous!", "Développeur Web & Mobile", "Développeur Fullstack"];
  const subText = ["Je m'appelle Herizo et je suis un développeur", "Je développe des applications web et mobiles dans le monde de la technologie", "Je suis passionné par la programmation et la technologie"];

  useEffect(() => {
    gsap.fromTo(
      `.profile-${index}`,
      { y: 100, duration: 0.5, delay: 0, animationTimingFunction: "ease-out" },
      { y: 0, duration: 0.5, delay: 0, animationTimingFunction: "ease-out" }
    );

    gsap.fromTo(
      `.subprofile-${index}`,
      { y: 100, duration: 0.5, delay: 0, animationTimingFunction: "ease-in-out" },
      { y: 0, duration: 0.5, delay: 0, animationTimingFunction: "ease-in-out" }
    );


    gsap.fromTo(
      `.subprofile-${index}`,
      { y: 0, duration: 0.5, delay: 5, animationTimingFunction: "ease-in-out" },
      { y: 100, duration: 0.5, delay: 5, animationTimingFunction: "ease-in-out" }
    );
    gsap.fromTo(
      `.profile-${index}`,
      { y: 0, duration: 0.5, delay: 5, animationTimingFunction: "ease-in-out" },
      { y: 100, duration: 0.5, delay: 5, animationTimingFunction: "ease-in-out" }
    );
    const time = setTimeout(() => {
      let iteration = index + 1;
      if (iteration >= textMain.length) {
        iteration = 0;
      }
      setIndex(iteration);
    }, 6000);
    return () => clearTimeout(time);
  }, [index]);

  return (
    <div className="main w-full" ref={container}>
      <div className="lg:pt-0 flex flex-col w-full justify-center text-center h-screen items-center bg-slate-950 text-white px-5 lg:px-32 bg-[url('/background.png')] bg-cover">
        <div className="relative w-full h-24 text-center overflow-hidden">
          {
            textMain.map((text, index) => {
              return <h1 className={`w-full text-3xl lg:text-6xl font-bold py-4 profile-${index} overflow-hidden absolute`} key={`text-${index}`} style={{ right: 0, top: 0, transform: "translateY(150px)" }}>
                {text}
              </h1>
            })
          }

        </div>
        <div className="relative w-full h-20 text-center overflow-hidden">{
          subText.map((text, index) => {
            return <h2 className={`w-full text-lg lg:text-3xl font-semibold subprofile-${index} overflow-hidden absolute`} key={`subtext-${index}`} style={{ right: 0, top: 0, transform: "translateY(100px)" }}>
              {text}
            </h2>
          })
        }</div>
        <div className="flex gap-4 mt-4">
          <ButtonComponent func={(e) => { }}>Commencer</ButtonComponent>
          <ButtonComponent
            func={(e) => { }}
            className="bg-gray-700 text-white hover:bg-gray-900 "
          >
            Obtenir CV
          </ButtonComponent>
        </div>
      </div>
      <SkillsComponent />
      <FormationsComponent />
      <ExperiencesComponent />
    </div>
  );
};

export default Home;

interface ISkills {
  index: string;
  icon: React.ReactNode;
  techno: string;
  description: string;
  sections: string[];
}

const SkillsComponent = () => {
  const container = useRef<HTMLDivElement>(null);

  const skillsFrontEnd: ISkills[] = [
    {
      index: "2-angular",
      icon: <FaAngular className="text-6xl text-red-600" />,
      techno: "Angular",
      description:
        "Développement d’applications web SPA robustes avec Angular. Bonne maîtrise du système de composants, des services et de la communication via RxJS. Utilisation des formulaires réactifs, du routing avancé, et d’Angular Material pour des interfaces élégantes. Je suis attentif à la performance et à la maintenabilité du code via lazy loading, architecture modulaire, et bonnes pratiques Angular.",
      sections: [
        "Angular CLI",
        "Modules & Lazy loading",
        "Composants", "Directives", "Pipes personnalisés",
        "Formulaires réactifs", "Template-driven forms",
        "Services", "Dependency Injection",
        "Routing avancé",
        "RxJS",
        "HttpClient",
      ],
    },
    {
      index: "1-react",
      icon: <FaReact className="text-6xl text-blue-400" />,
      techno: "React",
      description:
        "Création d’interfaces web réactives avec React.js. Bonne maîtrise des hooks, du routing, des appels API, et de la gestion d’état via Context API ou Redux. Capacité à créer des composants réutilisables, à structurer des projets scalables et à intégrer des bibliothèques tierces (UI kits, charting, date pickers…). J’adopte les bonnes pratiques de performance, d’accessibilité et d’optimisation du code.",
      sections: [
        "React Router",
        "Axios",
        "ReduxToolkit / Context API",
        "TailwindCSS / Sass",
        "ShadCN",
        "Vite / Next.js",
        "Jest / Testing Library",
      ],
    },
  ];

  const skillsBackEnd: ISkills[] = [
    {
      index: "3-django",
      icon: <DiDjango size={100} className=" text-black" />,
      techno: "Django",
      description:
        "Création d’applications web robustes avec Django. Bonne maîtrise de l’ORM, des vues génériques ou personnalisées, des modèles complexes et du système d’authentification. J’utilise Django REST Framework pour exposer des APIs RESTful, et je structure mes projets pour être facilement maintenables et scalables. Je suis aussi à l’aise avec le déploiement via Docker ou Railway.",
      sections: [
        "Django classique",
        "Django REST Framework",
        "ORM Django",
        "Authentification JWT",
        "Formulaires Django",
        "Middlewares personnalisés",
        "Django TestCase",
        "Déploiement (Docker/Heroku)",
        "Intégration avec des bases",
      ],
    },
    {
      index: "3-node-express",
      icon: <FaNode size={100} className=" text-green-500" />,
      techno: "Node/Express",
      description:
        "Développement de serveurs back-end performants avec Node.js et Express. Je conçois des APIs RESTful sécurisées, documentées et faciles à maintenir. Utilisation de middlewares personnalisés, de JWT pour l’authentification, et d’ORMs comme Mongoose ou Sequelize selon la base de données utilisée. Je structure mes projets pour une scalabilité optimale et je suis à l’aise avec le déploiement sur des plateformes cloud.",
      sections: [
        "routes",
        "middlewares",
        "gestion des erreurs",
        "modules",
        "file system",
        "streams",
        "JWT",
        "sessions",
        "bcrypt",
        "body-parser",
        "helmet",
        "cors",
        "multer",
      ],
    },
  ];

  const skillsBD: ISkills[] = [
    {
      index: "3-postgreSQL",
      icon: <BiLogoPostgresql size={100} className=" text-blue-900" />,
      techno: "PostgreSQL",
      description:
        "Développement de serveurs back-end performants avec Node.js et Express. Je conçois des APIs RESTful sécurisées, documentées et faciles à maintenir. Utilisation de middlewares personnalisés, de JWT pour l’authentification, et d’ORMs comme Mongoose ou Sequelize selon la base de données utilisée. Je structure mes projets pour une scalabilité optimale et je suis à l’aise avec le déploiement sur des plateformes cloud.",
      sections: [
        "Modélisation relationnelle",
        "Requêtes SQL complexes",
        "Fonctions personnalisées",
        "Index",
        "vues matérialisées",
        "triggers",
        "Transactions",
        "contraintes",
        "Sauvegardes et restauration",
        "pgAdmin",
        "psql",
        "ORM",
        "Django ORM",
        "Prisma…",
        "Sécurité et gestion des rôles",
      ],
    },
    {
      index: "3-mongodb",
      icon: <BiLogoMongodb size={100} className=" text-green-400" />,
      techno: "MongoDB",
      description:
        "Utilisation de MongoDB pour la gestion de données NoSQL dans des applications modernes. Conception de collections optimisées, requêtes complexes avec l’Aggregation Pipeline, gestion des relations via références ou imbrications. Intégration avec Node.js et Express à l’aide de Mongoose pour structurer et valider les données. Capacité à assurer la performance, la sécurité et la scalabilité des bases MongoDB.",
      sections: [
        "Modélisation NoSQL",
        "Mongoose",
        "CRUD",
        "Aggregation Pipeline",
        "Indexation",
        "Relations ObjectId",
        "Gestion des validations",
        "middleware",
        "Mongoose",
        "Sanitisation",
        "rate limiting",
        "JWT",
        "Sauvegarde/restauration",
        "MongoDB Compass",
        "Atlas",
      ],
    },
  ];

  const SkillSection = ({ skill }: { skill: ISkills }) => {
    return (
      <div
        id="skills"
        key={`${skill.index}`}
        className="flex flex-col items-center lg:items-start w-full pb-8 px-8"
      >
        {skill.icon}
        <h3 className="text-2xl my-4">{skill.techno}</h3>
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {skill?.sections?.map((section, index) => {
            return (
              <Badge
                className="cursor-pointer"
                variant={"secondary"}
                key={`${skill.index}-${index}`}
              >
                {section}
              </Badge>
            );
          })}
        </div>
      </div>
    );
  };

  const imageSize = 400;
  const distance = 100;
  const duration = 0.25;

  useGSAP(() => {
    if (container?.current) {
      gsap.registerPlugin(ScrollTrigger)
      const width = container?.current?.getBoundingClientRect().width
      gsap.set('.front-end', { x: width })
      gsap.set('.back-end', { x: width })
      gsap.set('.bd', { x: width })
      gsap.set('.frontend-image', { y: distance, opacity: 0 })
      gsap.set('.backend-image', { y: distance, opacity: 0 })
      gsap.set('.bd-image', { y: distance, opacity: 0 })


      const tlFrontEnd = gsap.timeline({
        scrollTrigger: {
          trigger: ".front-end",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      })
      const tlBackEnd = gsap.timeline({
        scrollTrigger: {
          trigger: ".back-end",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      })
      const tlBD = gsap.timeline({
        scrollTrigger: {
          trigger: ".bd",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      })

      const tlFrontEndImage = gsap.timeline({
        scrollTrigger: {
          trigger: ".front-end",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      })
      const tlBackEndImage = gsap.timeline({
        scrollTrigger: {
          trigger: ".back-end",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      })
      const tlBDImage = gsap.timeline({
        scrollTrigger: {
          trigger: ".bd",
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        }
      })

      /*********************Image***************/
      tlFrontEndImage.to(".frontend-image", {
        y: 0, opacity: 1, duration,
        stagger: 0.1,
        animationTimingFunction: "ease-in",
      });
      /*********************Skills***************/
      tlFrontEnd.to(".front-end", {
        x: 0, duration: 0.75,
        animationTimingFunction: "ease-in-out",
      });

      /*********************Image***************/
      tlBackEndImage.to(".backend-image", {
        y: 0, opacity: 1, duration,
        stagger: 0.1,
        animationTimingFunction: "ease-in",
      });
      /*********************Skills***************/
      tlBackEnd.to(".back-end", {
        x: 0, duration: 0.75,
        animationTimingFunction: "ease-in-out",
      });

      /*********************Image***************/
      tlBDImage.to(".bd-image", {
        y: 0, opacity: 1, duration,
        stagger: 0.1,
        animationTimingFunction: "ease-in",
      });
      /*********************Skills***************/
      tlBD.to(".bd", {
        x: 0, duration: 0.75,
        animationTimingFunction: "ease-in-out",
      });
    }
  }, { scope: container })

  return (
    <div
      className="skills px-5 lg:px-32 py-16 bg-gray-900 text-white"
      style={{ boxSizing: "content-box" }}
      ref={container}
    >
      <h2 className="text-4xl font-bold">
        Les différentes technologies maîtrisées
      </h2>
      <div className="flex w-full my-16">
        <div className="hidden lg:flex flex-col items-center lg:w-1/2 relative">
          <div className="sticky w-full top-40 flex justify-center" style={{ height: imageSize }}>
            <Image className="absolute frontend-image" src={"/frontend.png"} alt="skills" width={imageSize} height={imageSize} />
            <Image className="absolute backend-image" src={"/backend.png"} alt="skills" width={imageSize} height={imageSize} />
            <Image className="absolute bd-image" src={"/bd.png"} alt="skills" width={imageSize} height={imageSize} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 border-l-2 border-gray-500 p-8">
          <div className="front-end pb-8">
            <div className="flex items-center gap-2 pb-8">
              <div className="flex justify-center items-center w-12 h-12 text-2xl font-bold border-white border-4 px-4 py-4 mr-2 rounded-full">
                1
              </div>
              <h4 className="text-4xl font-bold">Front-end</h4>
            </div>
            <hr className="pb-8 border-gray-500" />
            <div className="flex flex-col w-full">
              {skillsFrontEnd.map((skill) => {
                return <SkillSection skill={skill} key={skill.index} />;
              })}
            </div>
          </div>
          <div className="back-end pb-8">
            <div className="flex items-center gap-2 pb-8">
              <div className="flex justify-center items-center w-12 h-12 text-2xl font-bold border-white border-4 px-4 py-4 mr-2 rounded-full">
                2
              </div>
              <h4 className="text-4xl font-bold">Back-end</h4>
            </div>
            <hr className="pb-8 border-gray-500" />
            <div className="flex flex-wrap w-full">
              {skillsBackEnd.map((skill) => {
                return <SkillSection skill={skill} key={skill.index} />;
              })}
            </div>
          </div>
          <div className="bd">
            <div className="flex items-center gap-2 pb-8">
              <div className="flex justify-center items-center w-12 h-12 text-2xl font-bold border-white border-4 px-4 py-4 mr-2 rounded-full">
                3
              </div>
              <h4 className="text-4xl font-bold">Base de données</h4>
            </div>
            <hr className="pb-8 border-gray-500" />
            <div className="flex flex-wrap w-full">
              {skillsBD.map((skill) => {
                return <SkillSection skill={skill} key={skill.index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IFormations {
  degree: string;
  institut: string;
  description: string;
  years: string;
}

interface IFormationSection {
  formation: IFormations;
  index: number;
}

const FormationSection: React.FC<IFormationSection> = ({
  formation,
  index,
}) => {
  return (
    <div className={`flex flex-col w-1/2`}>
      <h3 className="text-2xl font-bold">{formation.degree}</h3>
      <h4 className="text-md text-gray-500">{formation.institut}</h4>
      <h6 className="text-md text-gray-500 mb-8">{formation.years}</h6>
      <p className="text-2xl">{formation.description}</p>
    </div>
  );
};

const FormationsComponent = () => {
  const formations: IFormations[] = [
    {
      degree: "Diplôme Licence",
      institut: "Institut Supérieur Polytechnique de Madagascar",
      description:
        "Obtention de du diplôme de licence en informatique de gestion, génie logiciel et intelligence artificielle",
      years: "2017-2020",
    },
    {
      degree: "Diplôme Master",
      institut: "Institut Supérieur Polytechnique de Madagascar",
      description:
        "Obtention de du diplôme de master en informatique de gestion, génie logiciel et intelligence artificielle",
      years: "2020-2023",
    },
  ];

  return (
    <div className="w-full px-36 py-16">
      <h2 className="text-4xl font-bold pb-16">Formations</h2>
      {formations?.map((formation, index) => {
        return (
          <div
            className={`w-full flex pb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            key={index}
          >
            <div className="w-1/2">
            </div>
            <FormationSection formation={formation} index={index} />
          </div>
        );
      })}
    </div>
  );
};

interface IExperiences {
  logo: string;
  society: string;
  post: string;
  years: string;
  description: string;
  techno: string[];
}

const ExperiencesComponent = () => {
  const experiences: IExperiences[] = [
    {
      logo: "",
      society: "Haikintana Association",
      post: "Staigiaire développeur web Fullstack",
      years: "Avril 2021 - Octobre 2021",
      description:
        "Création d'une application web pour la gestion des différents membres de l'association ainsi que les différents événements organisés par l'assocation. Pour gérer la présence ainsi que l'identification des différents membres, on a implementé une fonctionnalité qui permet de génerer le badge avec son QRCode d'identification qui pourra être scanné par l'administrateur pour le pointage lors des évènements.",
      techno: [
        "Angular",
        "Rxjs",
        "AuthGuard",
        "JWT",
        "Django",
        "DRF",
        "MariaDB",
        "Filezila",
        "Git",
        "GitHub",
        "Heroku",
        "Slack",
      ],
    },
    {
      logo: "",
      society: "Vatilab",
      post: "Stagiaire développeur web Front-end",
      years: "Février 2024 - Juillet 2024",
      description:
        "Maintenance de l'application web et mobile MyBeeDoo, ainsi que l'implementation des nouvelles fonctionnalités comme l'implémentation d'un messagarie, l'achat de produit, le paiement par messagerie et le refont de toute l'application en suivant le design fourni par les designers en respectant le design UX/UI pour donner une bonne expérience aux utilisateurs lors de l'utilisation de l'application.",
      techno: [
        "React",
        "Redux",
        "Stripe",
        "OAuth",
        "PayPal API",
        "Git",
        "Gitlab",
        "Cypress",
        "Filezila",
        "Trello",
        "Méthode Agile",
        "AdobeXD",
      ],
    },

    {
      logo: "",
      society: "Vatilab",
      post: "Développeur web Front-end",
      years: "Juillet 2024 - Février 2025",
      description:
        "Implémentation des nouveaux projets web et mobile sur le côté front-end en suivant les maquettes fournis par les designers en respectant le design UX/UI ainsi que la maintenance des projets existants comme le debugage des bugs en production ou pour des mises à jours des applications existants tout en étant en collaboration avec l'équipe du back-end pour la documentation des appels API rattaché aux projets.",
      techno: [
        "Angular",
        "Rxjs",
        "React",
        "Redux",
        "Stripe",
        "OAuth",
        "PayPal API",
        "Git",
        "Gitlab",
        "Cypress",
        "Filezila",
        "Trello",
        "Méthode Agile",
        "AdobeXD",
        "Figma",
        "Flutter",
        "GoogleMapAPI",
        "Strapi",
        "MariaDB",
      ],
    },
  ];

  const ExperienceSection: React.FC<{
    experience: IExperiences;
    index: number;
    total: number;
  }> = ({ experience, index, total }) => {
    return (
      <div
        className={`flex flex-col w-1/3 text-justify ${index < total - 1 ? "pe-8" : ""
          }`}
      >
        <h3 className="text-3xl">{experience.society}</h3>
        <h4 className="text-md text-gray-500">Poste : {experience.post}</h4>
        <h5 className="text-md text-gray-500 pb-8">{experience.years}</h5>
        <p className="pb-8 flex-auto">{experience.description}</p>
        <div className="flex flex-wrap gap-2 flex-1">
          {experience.techno.map((section, index) => {
            return (
              <Badge variant={"secondary"} key={`${index}-${section}`}>
                {section}
              </Badge>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-36 py-16 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center pb-16">
        Experiences professionnelles
      </h2>
      <div className="flex flex-wrap w-full pb-8">
        {experiences?.map((experience: IExperiences, index) => {
          return (
            <ExperienceSection
              experience={experience}
              index={index}
              total={experiences.length}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
