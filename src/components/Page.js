import React from "react";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
// import ContactMe from "./ContactMe";
import Resume from "./Resume";

export default function Page({ currentPage }) {
  const pageSelector = () => {
    switch (currentPage) {
      case "aboutMe":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      // case "contactMe":
      //   return <ContactMe />;
      case "resume":
        return <Resume />
      default:
        return <AboutMe />;
    }
  };

  return (
  <div id="pageBody" className="bg-fixed bg-cover bg-top bg-repeat-y pageBackground pb-10 h-[89vh]">
    {pageSelector()}
  </div>);
}