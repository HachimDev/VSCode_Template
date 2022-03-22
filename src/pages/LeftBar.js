import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const gitlabLogo = require("../assets/logos/gitlabLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const NPMIcon = require("../assets/icons/npm_white_big.png");

const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showPluginList, setShowPluginList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  /**
   * It returns a list of links to the web projects that I've made
   */
  const WebList = () => (
    <div>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>First Project</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Second Project</p>
        </div>
      </a>
    </div>
  );

  /**
   * It returns a list of links to the npm packages that I've made
   */
  const PluginList = () => (
    <div>
      <a
        href="https://www.npmjs.com/package/hachim-signer"
        target="_blank"
        rel="noreferrer"
      >
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={NPMIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>APK Signer</p>
        </div>
      </a>
      {/* <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={TSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Second Project</p>
        </div>
      </a> */}
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
            {/* Plugin projects */}
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => setShowPluginList(!showPluginList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>NPM Packages</p>
            </div>
            {showPluginList ? <PluginList /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a
              href="https://github.com/HachimDev?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer"
              />
            </a>
            <a
              href="https://gitlab.com/users/HachimDev/projects"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gitlabLogo}
                alt="Kaggle Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hachim-jabri/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer"
              />
            </a>
            <Link
              target="_blank"
              rel="noreferrer"
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:hachim.jabri@gmail.com";
                e.preventDefault();
              }}
            >
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
