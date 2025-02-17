import React from "react";
import BallCanvas from "./canvas/Ball"; // Ensure the correct import path
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";


const SocialIcons = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {socials.map((social) => (
        <div
          className="w-28 h-28 cursor-pointer"
          key={social.name}
          onClick={() => window.open(social.url, "_blank")}
        >
          <BallCanvas icon={social.icon} /> {/* Ensure BallCanvas is working */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(SocialIcons, "");
