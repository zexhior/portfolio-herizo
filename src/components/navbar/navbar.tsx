"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { ButtonComponent } from "../button/button";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaTools } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useLanguage } from "@/provider/langprovider";
import { LanguageContextType } from "@/app/types/languageType";

type Link = {
  title: string;
  link: string;
};

const NavbarComponent = () => {
  const langage: LanguageContextType | null = useLanguage();
  const [open, setOpen] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [menu, setMenu] = useState<Link[]>([]);
  const [contactText, setContactText] = useState<string>("");
  const iconsMenu = [
    <FaTools size={20} key="icon-menu-1" />,
    <FaGraduationCap size={20} key="icon-menu-2" />,
    <FaBriefcase size={20} key="icon-menu-3" />,
    <FaLaptopCode size={20} key="icon-menu-4" />
  ];
  const logo = '/logo/herizo-light.png';

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    fetch("/navbar.json").then(response => {
      response.json().then((data) => {
        const result: { menu: Link[], contact: string } = data[langage?.lang];
        setMenu(result.menu);
        setContactText(result.contact);
      })
    })
  }, [langage])

  useGSAP(() => {
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
  }, { dependencies: [isDesktop, menu] });

  const handlerScrollTo = (id: string) => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, { duration: 0.5, scrollTo: { y: id, offsetY: 100 } });
    setOpen(false);
  }
  const handlerShowContext = () => {
    setIsOpenDropDown(!isOpenDropDown)
  }

  const handlerChangeLang = (lang: string) => {
    langage.setLang(lang);
    setIsOpenDropDown(false)
  }

  return (
    <div
      className="nav flex items-center justify-between w-full fixed z-10 px-4 lg:px-32 py-4 lg:py-10"
    >
      <div className="flex gap-4">
        <img src={logo} alt="logo" width={100} height={80} />
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="bg-slate-500 rounded-full text-white hover:text-gray-600 font-bold px-6 outline-none" onClick={handlerShowContext}>
            {langage.lang}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-800 text-white border-md rounded-lg mt-2 w-24 p-2">
            <DropdownMenuItem className="text-lg font-bold hover:bg-slate-900 p-2 rounded-lg" onSelect={() => handlerChangeLang("fr")}>
              fr
            </DropdownMenuItem>
            <DropdownMenuItem className="text-lg font-bold hover:bg-slate-900 p-2 rounded-lg" onSelect={() => handlerChangeLang("en")}>
              en
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {isDesktop ? (<NavigationMenu className="lg:flex">
        <NavigationMenuList className="flex gap-8">
          {menu.map((item: Link, index: number) => {
            return (
              <div key={index}>
                <NavigationMenuItem >
                  <NavigationMenuLink className="bg-transparent text-white hover:text-gray-600 font-bold cursor-pointer" onClick={() => {
                    handlerScrollTo(item.link);
                  }}>
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            );
          })}
          <NavigationMenuItem>
            <ButtonComponent func={() => { }}><p onClick={() => {
              handlerScrollTo("#footer");
            }}>{contactText}</p></ButtonComponent>
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
                    <div key={index}><NavigationMenuItem >
                      <p
                        className="flex bg-transparent"
                        onClick={() => {
                          handlerScrollTo(item.link);
                        }}
                      >
                        <NavigationMenuLink className="flex gap-4 bg-transparent text-white hover:text-gray-600 font-bold">
                          <span>{iconsMenu[index]}</span>{item.title}
                        </NavigationMenuLink>
                      </p>
                    </NavigationMenuItem></div>

                  );
                })}
                <ButtonComponent func={() => { }}><p onClick={() => {
                  handlerScrollTo("#footer");
                }}>{contactText}</p></ButtonComponent>
              </NavigationMenuList>
            </NavigationMenu>
          </DrawerContent>
        </Drawer>)
      }
    </div >
  );
};

export default NavbarComponent;
