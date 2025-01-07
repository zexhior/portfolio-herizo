import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

type Link = {
  title: string;
  link: string;
};

const NavbarComponent = () => {
  const menu: Link[] = [
    {
      title: "Accueil",
      link: "/",
    },
    {
      title: "Etudes",
      link: "/etudes",
    },
    {
      title: "Expériences",
      link: "/experiences",
    },
    {
      title: "Contact",
      link: "/contacts",
    },
  ];

  return (
    <div className="flex justify-center w-full p-3 bg-white fixed z-10">
      <NavigationMenu>
        <NavigationMenuList>
          {menu.map((item: Link, index: number) => {
            return (
              <NavigationMenuItem key={index}>
                <Link href={item.link} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavbarComponent;
