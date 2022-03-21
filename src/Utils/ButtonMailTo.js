import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label, linkCss = "" }) => {
  const classStyleBtn =
    linkCss === ""
      ? "border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs"
      : linkCss;

  return (
    <Link
      className={classStyleBtn}
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
