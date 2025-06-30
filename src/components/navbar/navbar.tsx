"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { ButtonComponent } from "../button/button";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger, DrawerTitle } from "../ui/drawer";
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaTools } from "react-icons/fa";

type Link = {
  icon: React.ReactNode;
  title: string;
  link: string;
};

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const menu: Link[] = [
    {
      icon: <FaTools size={20} />,
      title: "Compétences",
      link: "#skills",
    },
    {
      icon: <FaGraduationCap size={20} />,
      title: "Formations",
      link: "#formations",
    },
    {
      icon: <FaBriefcase size={20} />,
      title: "Expériences",
      link: "#experiences",
    },
    {
      icon: <FaLaptopCode size={20} />,
      title: "Projets",
      link: "#projects",
    },
  ];
  const idSection = ["skills", "formations", "experiences", "projects", "footer"];

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top",
        scrub: true,
      },
    });
    tl.set(".nav", { backgroundColor: "transparent" });
    tl.to(".nav", { backgroundColor: "#1a1a1aa3", duration: 1 });
  }, [])

  const handlerScrollTo = (index: number) => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, { duration: 0.5, scrollTo: { y: `#${idSection[index]}`, offsetY: 100 } });
    setOpen(false);
  }

  return (
    <div
      className="nav flex items-center justify-between w-full fixed z-10 px-4 lg:px-32 py-4 lg:py-10"
    >
      <h1 className="text-xl lg:text-3xl text-white font-bold hover:text-gray-600 cursor-pointer">Portfolio</h1>
      {isDesktop ? (<NavigationMenu className="lg:flex">
        <NavigationMenuList className="flex gap-8">
          {menu.map((item: Link, index: number) => {
            return (
              <NavigationMenuItem key={index}>
                <p
                  className="bg-transparent"
                  onClick={() => {
                    handlerScrollTo(index);
                  }}
                >
                  <NavigationMenuLink className="bg-transparent text-white hover:text-gray-600 font-bold">
                    {item.title}
                  </NavigationMenuLink>
                </p>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <ButtonComponent func={() => { }}><p onClick={() => {
              handlerScrollTo(menu.length);
            }}>Contacter-moi</p></ButtonComponent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>) :
        (<Drawer open={open} direction="right">
          <div onClick={() => setOpen(true)}>
            <RxHamburgerMenu className="text-white text-2xl" />
          </div>
          <DrawerContent className="bg-slate-900 text-white border-none w-screen p-4">
            <NavigationMenu className="flex flex-col">
              <NavigationMenuList className="flex flex-col items-start gap-6">
                <DrawerHeader className="flex justify-start text-center w-[calc(100vw-20px)] border-b-2 border-slate-300 px-4">
                  <DrawerTitle className="text-white text-xl font-bold">Menu</DrawerTitle>
                </DrawerHeader>
                {menu.map((item: Link, index: number) => {
                  return (
                    <NavigationMenuItem key={index} className="v">
                      <p
                        className="flex bg-transparent"
                        onClick={() => {
                          handlerScrollTo(index);
                        }}
                      >
                        <NavigationMenuLink className="flex gap-4 bg-transparent text-white hover:text-gray-600 font-bold">
                          <span>{item.icon}</span>{item.title}
                        </NavigationMenuLink>
                      </p>
                    </NavigationMenuItem>
                  );
                })}
                <ButtonComponent func={() => { }}><p onClick={() => {
                  handlerScrollTo(menu.length);
                }}>Contacter-moi</p></ButtonComponent>
              </NavigationMenuList>
            </NavigationMenu>
          </DrawerContent>
        </Drawer>)
      }
    </div>
  );
};

export default NavbarComponent;
