import React from "react";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Coursework from "./Coursework";
import Skills from "./Skills";
import Volunteer from "./Volunteer";

export default function Page({ currentPage }) {
  const pageSelector = () => {
    switch (currentPage) {
      case "home":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      case "course":
        return <Coursework />;
      case "skills":
        return <Skills />;
      case "volunteer":
        return <Volunteer />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div id="pageBody" className="bg-fixed bg-cover bg-top bg-repeat-y pageBackground pb-10 h-[89vh]">
      {pageSelector()}
    </div>
  );
}
