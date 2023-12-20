import React from "react";
// import logo from '../logo.svg'
import profilePhoto from "../assets/profile.jpg";


/*
USE THIS COMMAND TO DO GH-PAGES

npx gh-pages -b gh-pages -d build -r "https://github.com/JongwonLee123/react-portfolio"
*/

export default function AboutMe() {
  const bioContent = `My name is Jongwon Lee, and I am a sophmore college student studying computer science at Ohlone College. I plan on transferring to a CA University in Fall 2024, and I am currently learning various programming languages and software development tools to become a proficient developer.

  In my coursework from Ohlone college, I have gained 2 years of experience in C++ programming and Java, as well as worked on various web development projects from UC Berkeley's Extension Bootcamp. 
  
  My goal is to become a software developer and apply my skills and knowledge to develop innovative software solutions. I am persistent, detail-oriented, and have a strong desire to learn and stay up-to-date with the latest technology trends. I believe that my technical skills, experience, and personal qualities make me a good fit for a software developer role in any industry.
  `;

  const hobbiesContent = `I have a variety of hobbies that I enjoy in my free time. Some of my hobbies include:

  - Enjoy reading texts on social issues, history, and science
  - Play 5v5 basketball games at the gym
  - Engaging in video games and online communities
  `;

  return (
    <section className="pageBackground flex flex-col items-center">
       {/* Image and Text Container */}
      <div className="rounded bg-slate-800/60 m-10 p-10 w-fit block md:flex md:flex flex flex-col items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        {/* Image Container */}
        <div
          className="rounded-full overflow-hidden ring-8 m-4 ring-slate-800 w-32 h-32 md:w-48 md:h-48"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        >
          <img
            src={profilePhoto}
            className="object-cover w-full h-full"
            alt="profile"
          />
        </div>

        {/* Text below the image */}
        <p className="text-white max-w-[550px] font-bold font-sans text-lg md:text-xl text-center mt-4 md:mt-0 md:w-500">
          Welcome to my portfolio! To navigate arround, click the different tabs at the top right hand corner. For my GitHub and LinkedIn, they are located at the bottom of the page or on my resume.
        </p>
      </div>


      {/* About Me Content Container */}
      <div className="bg-black bg-opacity-40 rounded p-4 md:p-10 md:flex md:flex-col md:justify-center items-center" id="aboutMe" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <h2 className="m-6 whitespace-pre-line text-2xl font-bold text-white mb-4">About Me</h2>
        <p className="m-6 whitespace-pre-line max-w-[500px] text-white font-bold font-sans text-lg md:text-xl shadow-sm">
          {bioContent}
        </p>
      </div>

      {/* Hobbies Content Container */}
      <div className="rounded bg-slate-800/50 m-10 p-10 w-fit block md:flex md:flex-row md:items-start justify-center" id="hobbies" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Hobbies</h2>
          <p className="m-6 whitespace-pre-line max-w-[500px] text-white font-bold font-sans text-lg md:text-xl shadow-sm">
            {hobbiesContent}
          </p>
        </div>
      </div>
    </section>
  );
}
