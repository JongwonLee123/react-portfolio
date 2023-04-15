import React from "react";
// import logo from '../logo.svg'
import profilePhoto from "../assets/profile.jpg";

export default function AboutMe() {
  const bioContent = `Hello!
  My name is Jongwon Lee, and I am a college student studying computer science at Ohlone College. I plan on transfering to a University in Fall 2024, and I am currently learning various programming languages and software development tools to become a proficient developer.

  In my coursework, I have gained experience in C++ programming languages, as well as worked on various web development projects from UC Berkeley's Extension Bootcamp. 
  
  My goal is to become a software developer and apply my skills and knowledge to develop innovative software solutions. I am persistent, detail-oriented, and have a strong desire to learn and stay up-to-date with the latest technology trends. I believe that my technical skills, experience, and personal qualities make me a good fit for a software developer role in any industry."`;

  return (
    <section className="flex place-content-center" id="aboutMe">
      <div className="rounded bg-slate-800/50 m-2 p-2 w-fit block md:flex md:flex-row md:items-center">
        <img
          src={profilePhoto}
          className="rounded-full ring-8 m-4 ring-slate-800 float-left max-w-[125px] md:max-w-[300px]"
          alt="profile"
        ></img>
        <p className="m-6 whitespace-pre-line max-w-[500px] text-white font-bold font-sans">
          {bioContent}
        </p>
      </div>
    </section>
  );
}