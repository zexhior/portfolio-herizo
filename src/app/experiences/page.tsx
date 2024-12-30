import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const ExperiencePage = () => {
  const projects = [
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
      <div className="w-full ptf-data flex flex-wrap gap-3 p-11">
        {projects.map((projet) => {
          return (
            <Card className="w-1/3">
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
