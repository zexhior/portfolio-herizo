import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailchimp,
  FaPhone,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";
import FormComponent from "../form/form";

const FooterComponent = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-around text-white bg-gray-950 flex-1 px-32 py-16">
      <div className="w-full sm:w-1/2 px-10 flex">
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
            <FaFacebook color="white" size={50} />
            <FaLinkedin color="white" size={50} />
            <FaGithub color="white" size={50} />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 px-10 py-3 sm:py-0">
        <FormComponent />
      </div>
    </div>
  );
};

export default FooterComponent;
