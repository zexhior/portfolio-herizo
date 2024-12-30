import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const NavbarComponent = () => {
  const menu = [
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
    <div className="flex justify-center w-full p-3">
      <NavigationMenu>
        <NavigationMenuList>
          {menu.map((item) => {
            return (
              <NavigationMenuItem>
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
