"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaAngular, FaNode, FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { ButtonComponent } from "@/components/button/button";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       ".profile",
  //       { scale: 0, transformOrigin: "center 40%", duration: 1 },
  //       { scale: 1, duration: 1 }
  //     );
  //     gsap.from(".last_name", { x: -1000, duration: 2 });
  //     gsap.from(".first_name", { x: -1000, duration: 2, delay: 1 });
  //     gsap.fromTo(
  //       ".detail",
  //       { opacity: 0, duration: 4, delay: 3 },
  //       { opacity: 1, duraction: 4, delay: 3 }
  //     );
  //   },
  //   { scope: container }
  // );

  return (
    <div className="w-full" ref={container}>
      <div className="pt-24 lg:pt-0 flex flex-col w-full justify-center lg:h-screen items-center bg-slate-950 text-white px-32">
        <h1 className="text-6xl font-bold py-4 last_name">Bienvenue à vous!</h1>
        <h2 className="text-3xl font-semibold text-gray-600 first_name p-0 m-0">
          Je m'appelle Herizo et je suis un développeur web Fullstack
        </h2>
        <div className="flex gap-4 mt-4">
          <ButtonComponent func={(e) => {}}>Commencer</ButtonComponent>
          <ButtonComponent
            func={(e) => {}}
            className="bg-gray-700 text-white hover:bg-gray-900 "
          >
            Obtenir CV
          </ButtonComponent>
        </div>
      </div>
      <SkillsComponent />
    </div>
  );
};

export default Home;

const SkillsComponent = () => {
  const skills = [
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
    {
      index: "2-angular",
      icon: <FaAngular className="text-6xl text-red-600" />,
      techno: "Angular",
      description:
        "Développement d’applications web SPA robustes avec Angular. Bonne maîtrise du système de composants, des services et de la communication via RxJS. Utilisation des formulaires réactifs, du routing avancé, et d’Angular Material pour des interfaces élégantes. Je suis attentif à la performance et à la maintenabilité du code via lazy loading, architecture modulaire, et bonnes pratiques Angular.",
      sections: [
        "Angular CLI",
        "Modules & Lazy loading",
        "Composants, Directives, Pipes personnalisés",
        "Formulaires réactifs et Template-driven forms",
        "Services & Dependency Injection",
        "Routing avancé",
        "RxJS",
        "HttpClient",
      ],
    },
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
  return (
    <div
      className="px-32 py-16 bg-gray-900 text-white"
      style={{ boxSizing: "content-box" }}
    >
      <h2 className="text-2xl font-bold">
        Les différents Techno que je maitrîse
      </h2>
      <div className="flex w-full my-16">
        <div className="w-1/2">test</div>
        <div className="w-1/2 flex flex-col">
          {skills.map((skill, index) => {
            return (
              <div
                key={`${skill.index}`}
                className={`w-full flex flex-col ${
                  index < skills?.length - 1 ? "mb-16" : ""
                }`}
              >
                {skill.icon}
                <h3 className="text-2xl my-4">{skill.techno}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill?.sections?.map((section, index) => {
                    return (
                      <Badge
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
          })}
        </div>
      </div>
    </div>
  );
};
