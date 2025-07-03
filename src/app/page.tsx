"use client";
import React, { useEffect, useState, useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaAngular, FaNode, FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { ButtonComponent } from "@/components/button/button";
import { Badge } from "@/components/ui/badge";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/provider/langprovider";

const Home = () => {

  gsap.registerPlugin(useGSAP);
  const [timeLineMain, setTimeLineMain] = useState(gsap.timeline({ repeat: - 1 }));
  const [timeLineSub, setTimeLineSub] = useState(gsap.timeline({ repeat: - 1 }));
  const container = useRef(null);
  const { lang } = useLanguage();
  const [textMain, setTextMain] = useState<string[]>([]);
  const [subText, setSubText] = useState<string[]>([]);
  const [cv, setCV] = useState<string>("");

  useEffect(() => {
    fetch('/header.json').then(response => {
      response.json().then((data) => {
        const headerData: { textMain: string[], subText: string[], CV: string } = data[lang]
        setTextMain(headerData.textMain)
        setSubText(headerData.subText)
        setCV(headerData.CV)
      })
    })
  }, [lang])

  const handlerAnimation = (id: string, timeline: any) => {
    timeline.set(id, {
      y: 100,
      opacity: 0,
    })
    timeline.to(id, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    })
    /********************************/
    timeline.to(id, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      delay: 5
    })
  }

  useGSAP(() => {
    for (let i = 0; i < textMain.length; i++) {
      handlerAnimation(`.profile-${i}`, timeLineMain)
      handlerAnimation(`.subprofile-${i}`, timeLineSub)
    }
  }, { dependencies: [textMain, subText] })

  return (
    <div className="main w-full overflow-x-hidden md:overflow-x-visible" ref={container}>
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
        <div className="relative w-full h-20 text-center overflow-hidden text-slate-500">{
          subText.map((text, index) => {
            return <h2 className={`w-full text-lg lg:text-3xl font-semibold subprofile-${index} overflow-hidden absolute`} key={`subtext-${index}`} style={{ right: 0, top: 0, transform: "translateY(100px)" }}>
              {text}
            </h2>
          })
        }</div>
        <div className="flex gap-4 mt-4">
          <ButtonComponent
            func={(e) => { }}
            className="bg-gray-700 text-white hover:bg-gray-900 "
          >
            <a href="/CV/CV RASOLONJATOVO Brice Herizo.pdf" download="CV RASOLONJATOVO Brice Herizo.pdf">
              {cv}
            </a>
          </ButtonComponent>
        </div>
      </div>
      <SkillsComponent />
      <FormationsComponent />
      <ExperiencesComponent />
      <ProjectsComponent />
    </div>
  );
};

export default Home;

interface ISkills {
  index: string;
  techno: string;
  description: string;
  sections: string[];
}

const SkillsComponent = () => {
  const { lang } = useLanguage();
  const container = useRef<HTMLDivElement>(null);
  const [skillsTitle, setSkillsTitle] = useState<string>('');
  const [skillsState, setSkillsState] = useState<{ title: string, sections: ISkills[] }[]>([]);
  const images = ["/frontend.png", "/backend.png", "/bd.png"]
  const imageSize = 400;
  const distance = 100;
  const duration = 0.3;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    fetch("/skills.json").then((response: any) => {
      response.json().then((data: any) => {
        const skills: { skillsTitle: string, skills: { title: string, sections: ISkills[] }[] } = data[lang]
        setSkillsState(skills.skills)
        setSkillsTitle(skills.skillsTitle)
      });
    })
  }, [container, lang])

  useGSAP(() => {
    if (container?.current) {
      for (let i = 0; i < skillsState.length; i++) {
        gsap.set(`.skill-image-${i}`, { y: distance, opacity: 0 })
        const tlImage = gsap.timeline({
          scrollTrigger: {
            trigger: `.skill-${i}`,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          }
        })
        tlImage.to(`.skill-image-${i}`, {
          y: 0, opacity: 1, duration,
          animationTimingFunction: "ease-in",
        });
      }
    }
  }, { scope: container, dependencies: [skillsState, images] });

  const icons = [
    [
      <FaAngular className="text-6xl text-red-600" />,
      <FaReact className="text-6xl text-blue-400" />,
    ], [
      <DiDjango size={100} className=" text-black" />,
      <FaNode size={100} className=" text-green-500" />
    ], [
      <BiLogoPostgresql size={100} className=" text-blue-900" />,
      <BiLogoMongodb size={100} className=" text-green-400" />
    ]
  ]

  const SkillSection = ({ skill, icon }: { skill: ISkills, icon: ReactNode }) => {
    return (
      <div
        id="skills"
        key={`${skill.index}`}
        className="flex flex-col items-center lg:items-start w-full pb-8 lg:px-8"
      >
        {icon}
        <h3 className="text-2xl my-4">{skill.techno}</h3>
        <div className="hidden md:flex md:flex-wrap gap-2 justify-center md:justify-start">
          {skill?.sections?.map((section, index) => {
            return (
              <Badge
                className="cursor-pointer"
                variant={"secondary"}
                key={`${skill.index} - ${index}`}
              >
                {section}
              </Badge>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      id="skills"
      className="py-16 bg-gray-900 text-white"
      style={{ boxSizing: "content-box" }}
      ref={container}
    >
      <h2 className="text-4xl font-bold px-5 lg:px-32">
        {skillsTitle}
      </h2>
      <div className="flex w-full my-16 px-5 lg:px-32">
        <div className="hidden md:inline md:w-1/2 relative overflow-visible">
          <div className="sticky w-full top-40 flex justify-center" style={{ height: imageSize }}>
            {
              images.map((image, index) => {
                return <img className={`absolute skill-image-${index}`} src={image} alt="skills" width={imageSize} height={imageSize} key={`skill-image-${index}`} />
              })
            }
          </div>
        </div>
        <div className="w-full md:w-1/2 border-l-2 border-gray-500 p-8 overflow-x-hidden">
          {
            skillsState.map((skill, index) => {
              return (
                <div className={`skill-${index} pb - 4 lg: pb - 8`} key={`${skill}-${index}`}>
                  <div className="flex items-center gap-2 pb-8">
                    <div className="flex justify-center items-center w-12 h-12 text-2xl font-bold border-white border-4 px-4 py-4 mr-2 rounded-full">
                      {index + 1}
                    </div>
                    <h4 className="text-4xl font-bold">{skill.title}</h4>
                  </div>
                  <hr className="pb-8 border-gray-500" />
                  <div className="flex flex-col w-full">
                    {skill.sections.map((skill, i) => {
                      return <SkillSection skill={skill} key={skill.index} icon={icons[index][i]} />;
                    })}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

interface IFormations {
  image: string;
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
}) => {
  return (
    <div className={`flex flex-col w-full lg:w-1/2 py-16`}>
      <h3 className="text-2xl font-bold">{formation.degree}</h3>
      <h4 className="text-md text-gray-500">{formation.institut}</h4>
      <h6 className="text-md text-gray-500 mb-8">{formation.years}</h6>
      <p className="text-2xl">{formation.description}</p>
    </div>
  );
};

const FormationsComponent = () => {
  const [title, setTitle] = useState<string>("");
  const [formations, setFormations] = useState<IFormations[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    fetch("/formations.json").then(response => {
      response.json().then(data => {
        const result: { title: string, formations: IFormations[] } = data[lang]
        setTitle(result.title)
        setFormations(result.formations)
      })
    })
  }, [lang])

  return (
    <div id="formations" className="w-full px-5 lg:px-32 py-16">
      <h2 className="text-4xl font-bold pb-16">{title}</h2>
      {formations?.map((formation, index) => {
        return (
          <div
            className={`w-full lg:pb-16 flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            key={index}
          >
            <div className="flex h-80 w-ful lg:w-1/2 relative">
              <img src={formation?.image} alt="ispm" className="w-full" style={{ objectFit: "contain" }} />
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
  const [title, setTitle] = useState<string>("");
  const [experiences, setExperiences] = useState<IExperiences[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    fetch("/experiences.json").then(response => {
      response.json().then(data => {
        const result: { title: string, experiences: IExperiences[] } = data[lang]
        setTitle(result.title)
        setExperiences(result.experiences)
      })
    })
  }, [lang])

  const ExperienceSection: React.FC<{
    experience: IExperiences;
    index: number;
    total: number;
  }> = ({ experience, index, total }) => {
    return (
      <div
        className={`relative flex flex-col w-full lg:w-1/3 text-justify ${index < total - 1 ? "lg:pe-8" : ""
          } `}
      >
        <div className="flex items-center justify-center relative w-full h-32 my-8"><Image src={experience.logo} alt="haikintana" fill style={{ objectFit: "contain" }} />,</div>
        <h3 className="text-3xl">{experience.society}</h3>
        <h4 className="text-md text-gray-500">Poste : {experience.post}</h4>
        <h5 className="text-md pb-8">{experience.years}</h5>
        <p className="pb-8">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.techno.map((section, index) => {
            return (
              <Badge variant={"secondary"} key={`${index} -${section} `}>
                {section}
              </Badge>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div id="experiences" className="w-full px-5 lg:px-32 py-16 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center pb-16">
        {title}
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap w-full pb-8">
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

interface IProjet {
  logo: React.ReactNode | null;
  title: string;
  description: string;
  techno: string[]
  link?: string;
  screenShots?: string[]
}

const ProjectsComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const [projects, setProjects] = useState<IProjet[]>([]);
  const [title, setTitle] = useState<string>("")
  const [lookText, setLookText] = useState<string>("")

  useGSAP(() => {
    gsap.set('.projet', {
      opacity: 0,
      y: 50,
    },)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });
    tl.to(
      ".projet",
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, { scope: containerRef, dependencies: [projects] })

  useEffect(() => {
    fetch("/projects.json").then(response => {
      response.json().then(data => {
        const result: { title: string, projects: IProjet[], look: string } = data[lang]
        setProjects(result.projects)
        setTitle(result.title)
        setLookText(result.look)
      })
    })
  }, [lang])

  return <div id="projects" className="px-5 lg:px-32 py-8 md:py-16" ref={containerRef}>
    <h3 className="text-4xl font-bold">{title}</h3>
    <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-between py-4 md:py-16 box-content gap-4 md:gap-0" style={{ boxSizing: "border-box" }}>
      {
        projects.map((project, index) => {
          return <Card className="projet hover:bg-slate-300 relative overflow-hidden md:w-[calc(30.33%-0.5rem)]" key={index}>
            <CardHeader className={`projet-cardheader p-0 ${index < projects.length - 1 ? "mb-4" : ""} `}>
              <Carousel className="relative">
                <CarouselContent className="h-48 w-full m-0 p-0">
                  {
                    project.screenShots?.map((screenShot, index) => {
                      return <CarouselItem key={`${index} -screenshot - ${project?.title} `} className="relative bg-primary"><Image src={screenShot} alt={screenShot} fill style={{ objectFit: "contain" }} /></CarouselItem>
                    })
                  }
                </CarouselContent>
                <CarouselPrevious className="absolute z-10 left-5 top-1/2" />
                <CarouselNext className="absolute z-10 right-5 top-1/2" />
              </Carousel>
            </CardHeader>
            <CardContent className="flex flex-col items-start md:h-[calc(100%-12rem)]">
              <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
              <p className="flex-grow">{project.description}</p>
              {project?.link ? <a className="bg-slate-500 hover:bg-slate-800 p-4 rounded-full text-white font-bold w-fit" href={project?.link}>{lookText}</a> : <></>}
            </CardContent>
          </Card>
        })
      }
    </div>
  </div >
}