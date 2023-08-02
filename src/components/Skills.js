import React from "react";

//images
import cplus from "../assets/skills_icons/cplus.png";
import firebase from "../assets/skills_icons/firebase.png";
import figma from "../assets/skills_icons/figma.png";
import flutter from "../assets/skills_icons/flutter.png";
import git from "../assets/skills_icons/git.png";
import html from "../assets/skills_icons/html.png";
import java from "../assets/skills_icons/java.png";
import react from "../assets/skills_icons/react.png";

/*
Skills
   - React
   - C++
   - Git
   - Firebase
   - Figma
   - Flutter/Dart
   - Java
   - HTML
*/
export default function Skills() {
  const skillsList = [
    { image: cplus, name: "C++" },
    { image: firebase, name: "Firebase" },
    { image: figma, name: "Figma" },
    { image: flutter, name: "Flutter" },
    { image: git, name: "Git" },
    { image: html, name: "HTML" },
    { image: java, name: "Java" },
    { image: react, name: "React" },
  ];

  return (
    <section className="p-10 flex flex-col items-center" id="skills">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Skills/Tools Utilized</h2>
      <div className="grid grid-cols-3 gap-20 rounded bg-opacity-90 bg-white p-10">
        {skillsList.map((skill, index) => (
          <div key={index} className="text-center">
            <img
              src={skill.image}
              alt={skill.name}
              style={{ maxWidth: "100px", maxHeight: "100px", margin: "0 auto" }}
            />
            <p className="text-lg font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
