import React from "react";
import Project from "./Project";

import horiseon from "../assets/portfolio_images/horiseon.png";
import reactPortfolio from '../assets/portfolio_images/react.png'
import JATE from "../assets/portfolio_images/JATE.png";
import socialNAPI from '../assets/portfolio_images/socialAPI.png';
import blog_demo from "../assets/portfolio_images/funnyblogs.png";
import ecommerce from '../assets/portfolio_images/ecommerce.png'
import employee_tracker from '../assets/portfolio_images/employee_tracker.png'
import readMeGenerator from '../assets/portfolio_images/readme.png'
import old_portfolio from '../assets/portfolio_images/portfolio.png'
import weatherDashboard from '../assets/portfolio_images/weatherdashboard.png'
import easy_tracker from '../assets/portfolio_images/Welcome.png';

export default function Portfolio() {
  const compsciProjects = [
    {
      title: "Easy Tracker",
      imgLink: easy_tracker,
      extLink: "",
      ghLink: "https://github.com/JongwonLee123/Easy_Tracker",
      altText: "Screenshot of react portfolio site",
    },
    {
       title: "React portfolio",
       imgLink: reactPortfolio,
       extLink: "https://jongwon-lee-portfolio.herokuapp.com/",
       ghLink: "https://github.com/JongwonLee123/react-portfolio",
       altText: "Screenshot of react portfolio site",
    },
    {
      title: "PWA Text Editor",
      imgLink: JATE,
      extLink: "https://jate.herokuapp.com/",
      ghLink: "https://github.com/JongwonLee123/PWA_Text_Editor",
      altText: "Screenshot of Just another text editor",
    },
    {
      title: "Weather Dashboard",
      imgLink: weatherDashboard,
      extLink: "https://jongwonlee123.github.io/WeatherDashboard/",
      ghLink: "https://github.com/JongwonLee123/WeatherDashboard",
      altText: "Using API for Weather Dashboard",
    },
    {
      title: "Social Network API",
      imgLink: socialNAPI,
      extLink: "",
      ghLink: "https://github.com/JongwonLee123/Social_Network_Api",
      altText: "Screenshot of insomnia",
    },
    {
      title: "Funnyblogs",
      imgLink: blog_demo,
      extLink: "https://funnyposts.herokuapp.com/",
      ghLink: "https://github.com/JongwonLee123/funnyposts",
      altText: "Snapshot of funnyblogs",
    },
    {
      title: "E-Commerce Backend",
      imgLink: ecommerce,
      extLink: "",
      ghLink: "https://github.com/JongwonLee123/E-Commerce",
      altText: "Screenshot of e-commerce backend",
    },
    {
      title: "mySQL CMS",
      imgLink: employee_tracker,
      extLink: "",
      ghLink: "https://github.com/JongwonLee123/EmployeeTracker",
      altText: "Screenshot of CMS",
    },
    {
      title: "README generator",
      imgLink: readMeGenerator,
      extLink: "",
      ghLink: "https://github.com/JongwonLee123/NodeJs",
      altText: "Screenshot of readme generator",
    },
    {
      title: "My first HTML portfolio",
      imgLink: old_portfolio,
      extLink: "https://jongwonlee123.github.io/Profile/",
      ghLink: "https://github.com/JongwonLee123/Profile",
      altText: "First portfolio",
    },
    {
      title: "First steps of semantic code",
      imgLink: horiseon,
      extLink: "https://jongwonlee123.github.io/M1Challenge/",
      ghLink: "https://github.com/JongwonLee123/M1Challenge",
      altText: "Fixed up a demo page",
    },
  ];

  // const portfolio_text = `In this section, I present a selection of projects that demonstrate my skills and experience as a developer.`;

  return (
    <section className="flex justify-center" id="portfolioHighlights">
      <div className="xs:flex xs:flex-col md:grid rounded m-2 p-2 bg-slate-800/50 md:grid-cols-2 md:gap-4 items-center overflow-y-auto h-auto max-h-[75vh]">
        
        {compsciProjects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </section>
  );
}
