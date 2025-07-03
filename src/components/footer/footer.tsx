import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";
import FormComponent from "../form/form";

const FooterComponent = () => {
  const socialNetwork = [{ icon: <FaFacebook size={50} />, link: "https://www.facebook.com/rasolonjatovo.herizo" }, { icon: <FaLinkedin className="hover:text-slate-500" size={50} />, link: "https://www.linkedin.com/in/brice-herizo-rasolonjatovo-2991882a4" }, { icon: <FaGithub size={50} />, link: "https://github.com/zexhior" }]

  return (
    <div id="footer">
      <div className="w-full flex flex-col md:flex-row lg:flex-wrap items-center justify-around text-white bg-gray-950 flex-1 px-4 lg:px-32 lg:py-16">
        <div className="w-full md:w-1/2 px-10 flex">
          <div className="flex flex-col gap-2 text-gray-200">
            <h3 className="pt-8 pb-8font-bold">Contact info</h3>

            <div className="flex items-center gap-3">
              <FaPhone size={15} color="white" />
              <label>+261 38 26 264 28</label>
            </div>

            <div className="flex items-center gap-3">
              <IoMdMail size={15} color="white" />
              <label>herizoras1@gmail.com</label>
            </div>

            <div className="flex items-center gap-3 pb-8">
              <FaHome size={15} color="white" />
              <p>Madagascar, Antananarivo</p>
            </div>
            <div className="flex gap-5">
              {
                socialNetwork.map((item, index) => {
                  return (
                    <a href={item.link} key={index} className="text-white hover:text-slate-500">
                      {item.icon}
                    </a>
                  )
                })
              }
              <a href="" ></a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:px-10 py-3">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
