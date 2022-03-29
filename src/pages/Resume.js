import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";
import cvPdf from "../assets/files/cv_hachim_react_conserto_2022.pdf";

import "./resume.css";

const Resume = () => {
  // const style = { "margin-top": "10rem" };
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-60 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4 sub-title">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">EMSI School - Marrakech</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Masters in Computer Science Applied to Business Management
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2012 - Sept 2017
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4 sub-title">
            <code className="text-yellow_vs">Current Work</code>
          </div>
          {/* Work 1 */}
          <div className="w-3/4">
            <code className="text-blue_vs">Javascript Consultant</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Conserto - Lyon, France
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • February 2022 - Present
            </code>
            <br />
            <code className="text-sm">
              <br />• Developed application modules independently in{" "}
              <i>React</i> and fixed bugs promptly.
              <br />• Managed project delivery requirements from product design
              phase to post.
              <br />• Guaranted the proper integration of present and future
              front-end functionalities.
              <br />• Helped in choosing some Javascript libraries to use.
              <br />• Presented the progress at the end of each sprint.
            </code>
          </div>
          {/* End Work 1 */}
        </div>
        <div className="flex flex-row pt-10 flex-wrap ">
          <div className="w-1/4 sub-title">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Good knowledge of React, Node.js, Express.js.
              <br />• Clear understanding of JavaScript and Typescript.
              <br />• Experience in using Git and VSCode.
              <br />• Solid understanding of software development lifecycles.
              <br />• Strong analytical skills.
              <br />• Passionate about anything Javascript related.
              <br />• Self taught.
            </code>
          </div>
          <div>
            <a
              className="downloadCVBtn"
              href={cvPdf}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
