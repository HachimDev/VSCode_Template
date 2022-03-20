import React, { useState } from "react";
import { MailIcon } from "@heroicons/react/solid";
import Switch from "@mui/material/Switch";
import ButtonMailto from "../Utils/ButtonMailTo";

import "./contact.css";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div id="Contact" className="pb-72 mt-44">
      <div className="table mx-12 lg:mx-60">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
        <code className="switchRecherche">
          <Switch
            color="info"
            disabled
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          {isChecked ? "Hire me !" : <del>Hire me !</del>}
        </code>
        <code>
          Whether Im looking for a new opportunity or not, you can contact me by
          clicking the button below. <br />
          If you have a question or just want to say hi, feel free to contact me
          and I’ll get back to you ASAP !
        </code>
        <ButtonMailto
          label="Write me an E-Mail"
          mailto="mailto:hachim.jabri@gmail.com"
        />
      </div>
    </div>
  );
};

export default Contact;
