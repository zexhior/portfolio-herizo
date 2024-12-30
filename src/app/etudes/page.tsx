const EtudePage = () => {
  const formations = [
    {
      image: "/logo/logo_ispm.png",
      title: "Diplome de licence - 2020",
      description:
        "Obtention de diplôme de licence en Informatique et Télécommunication à l'Institut Supérieur Polytechnique de Madagascar",
    },
  ];
  return (
    <div className="w-full">
      {formations.map((formation) => {
        return (
          <div className="w-full flex items-center">
            <div className="w-1/2 flex justify-center items-center">
              <img src={formation.image} alt="" width={300} height={300} />
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-semibold">{formation.title}</h3>
              <p>{formation.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EtudePage;
