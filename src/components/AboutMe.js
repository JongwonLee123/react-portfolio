import React from "react";
// import logo from '../logo.svg'
import profilePhoto from "../assets/profile.jpg";

export default function AboutMe() {
  const bioContent = `Hello!
    My name is Jongwon Lee.
    I am currently a college student who is studying computer science. I am learning to be a developer to have more experience in a possible industry I can pursue in the future.
    
    My goal is to become a software engineer and be able to gain development skills.`;

  return (
    <section className="flex place-content-center" id="aboutMe">
      <div className="rounded bg-slate-800/50 m-2 p-2 w-fit block md:flex md:flex-row md:items-center">
        <img
          src={profilePhoto}
          className="rounded-full ring-8 m-4 ring-slate-800 float-left max-w-[125px] md:max-w-[300px]"
          alt="profile"
        ></img>
        <p className="m-6 whitespace-pre-line max-w-[300px] text-white font-bold font-sans">
          {bioContent}
        </p>
      </div>
    </section>
  );
}