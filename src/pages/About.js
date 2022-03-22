import React from "react";
import ReactRoundedImage from "react-rounded-image";

import "./About.css";

import { IdentificationIcon } from "@heroicons/react/solid";

import DivTechno from "../Utils/DivTechno";
import myPhoto from "../assets/images/myPhoto2.png";
import { NBR_YEARS_EXP } from "../Utils/constants";

const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
// const JsLogo = require("../assets/logos/JsLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
// const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const UnityLogo = require("../assets/logos/unityLogo.png");
const gmsLogo = require("../assets/logos/gms2Logo.png");
const vueLogo = require("../assets/logos/vueLogo.png");
const JsLogoGif = require("../assets/logos/JsLogoGif.gif");

/**
 * It renders the About section of the website.
 * @returns The About component is returning a div with a className of "mx-12 mt-60 lg:mx-60
 * items-center justify-center lg:w-1/2 text-justify".
 */
const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-40 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
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
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <ReactRoundedImage
                className="myPhoto"
                image={myPhoto}
                roundedColor="#FFF"
                imageWidth="200"
                imageHeight="200"
                roundedSize="10"
                borderRadius="50%"
              />
            </div>
            <div className="col-span-2">
              <code>
                Hellow ! I'm Hachim and I'm a frontend web developer living in
                Lyon. I was born and raised in Morocco and I love Everything
                Javascript related ! <br />I have{" "}
                <strong style={{ color: "#FFF" }}>
                  {NBR_YEARS_EXP} years{" "}
                </strong>
                experience using Javascript and React so far.
                <br />
                I'm Interested in the entire front-end spectrum and I have a
                good knowledge of the back-end (using Node.js), I Love to work
                on ambitious projects with positive people. <br />
                In my free time, I like to play and make video games for fun !
                Also messing around in VR.
              </code>
            </div>
          </div>
          <br />
          <br />
          <code>Here are some of the technologies I work with :</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <DivTechno logo={ReactLogo} label="React" />
            <DivTechno logo={JsLogoGif} label="Javascript(ES6+)" />
            <DivTechno logo={TypescriptLogo} label="TypeScript" />
            <DivTechno logo={ReduxLogo} label="Redux" />
            <DivTechno logo={NodeJSLogo} label="Nodejs" />
            <DivTechno logo={vueLogo} label="VueJS" label2="(in progress)" />
            <DivTechno logo={MongoDBLogo} label="MongoDB" />
            {/* <DivTechno logo={FirebaseLogo} label="Firebase" /> */}
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
