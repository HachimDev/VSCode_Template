import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

import DivTechno from "../Utils/DivTechno";

const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const UnityLogo = require("../assets/logos/unityLogo.png");
const gmsLogo = require("../assets/logos/gms2Logo.png");
const vueLogo = require("../assets/logos/vueLogo.png");

const nbrExp = 4;

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            Hellow ! I'm Hachim and I'm a web developper. I was born and raised
            in Morocco but now i live in Lyon area. I love Everything Javascript
            related ! and I have {nbrExp} years experience using React so far{" "}
            <br />
            In my free time, I like to play and make video games for fun ! Also
            messing around in VR.
          </code>
          <br />
          <br />
          <code>Here are some of the technologies I work with :</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <DivTechno logo={ReactLogo} label="React" />
            <DivTechno logo={JsLogo} label="Javascript(ES6+)" />
            <DivTechno logo={TypescriptLogo} label="TypeScript" />
            <DivTechno logo={ReduxLogo} label="Redux" />
            <DivTechno logo={NodeJSLogo} label="Nodejs" />
            <DivTechno logo={vueLogo} label="VueJS (learning)" />
            <DivTechno logo={MongoDBLogo} label="MongoDB" />
            <DivTechno logo={FirebaseLogo} label="Firebase" />
            <DivTechno logo={DockerLogo} label="Docker" />
            <DivTechno logo={UnityLogo} label="Unity" />
            <DivTechno logo={gmsLogo} label="GameMaker 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
