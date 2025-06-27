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
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from "@gsap/react";

type Link = {
  title: string;
  link: string;
};

const NavbarComponent = () => {
  const menu: Link[] = [
    {
      title: "Compétences",
      link: "#skills",
    },
    {
      title: "Formations",
      link: "#formations",
    },
    {
      title: "Expériences",
      link: "#experiences",
    },
    {
      title: "Projets",
      link: "#projects",
    },
  ];
  const idSection = ["skills", "formations", "experiences", "projects"];

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
    gsap.to(window, { duration: 0.5, scrollTo: { y: `#${idSection[index]}`, offsetY: 300 } });
  }

  return (
    <div
      className="nav flex items-center justify-between w-full p-3 fixed z-10 px-32 py-10"
    >
      <h1 className="text-3xl text-white hover:text-gray-600 cursor-pointer">Portfolio</h1>
      <NavigationMenu>
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
            <ButtonComponent func={() => { }}>Contacter-moi</ButtonComponent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavbarComponent;
