import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="w-screen ">
      <div className="fixed bottom-0 bg-slate-800/50 w-screen text-center text-white text-sm z-20 flex justify-center items-center flex-wrap">
        <p className="text-white px-1">
          &copy; Jongwon Lee 2023
        </p>
        <a className="px-1" href="https://github.com/JongwonLee123">Github</a>
        <a className="px-1" href="https://www.linkedin.com/in/jongwon-lee-39a3ba203/">
          LinkedIn
        </a>
        <br/>
        <p className="px-1">Background &copy; Jongwon Lee</p>
      </div>
    </section>
  );
}