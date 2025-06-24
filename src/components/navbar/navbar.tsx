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

  return (
    <div className="flex justify-between w-full p-3 fixed z-10 bg-transparent px-32 py-10" style={{background}}>
      <div></div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-8">
          {menu.map((item: Link, index: number) => {
            return (
              <NavigationMenuItem key={index}>
                <Link
                  href={item.link}
                  legacyBehavior
                  passHref
                  className="bg-transparent"
                >
                  <NavigationMenuLink className="bg-transparent text-white font-bold">
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <ButtonComponent func={() => {}}>Contacter-moi</ButtonComponent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavbarComponent;
