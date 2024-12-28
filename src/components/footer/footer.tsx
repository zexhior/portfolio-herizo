import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className="w-full flex justify-around text-white bg-blue-900 p-3 flex-1">
      <div className="w-1/3 px-10 py-5 text-center">
        <p>
          Je suis disponible si vous avez besoin de mon service que ce soit pour
          la réalisation d'un projet ou que ce soit pour une coopération. Vous
          pouvez m'appeler ou m'envoyer un e-mail et je vous répondrais aussi
          tôt que possible.{" "}
        </p>
      </div>
      <div className="w-1/3 px-10">
        <h3 className="py-3 font-bold">Contact info</h3>
        <div className="flex flex-col gap-2 text-gray-200">
          <p>+261 38 26 264 28</p>
          <p>herizoras1@gmail.com</p>
          <p>II A 36 D Amboditsiry Madagascar</p>
        </div>
      </div>
      <div className="w-1/3 px-10">
        <h3 className="py-3 font-bold">Réseaux sociaux</h3>
        <div className="flex gap-5">
          <FaFacebook color="white" size={50} />
          <FaLinkedin color="white" size={50} />
          <FaGithub color="white" size={50} />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
