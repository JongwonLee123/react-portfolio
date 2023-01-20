import React from "react";
import Nav from './Nav'

export default function Header({pages, setCurrentPage, currentPage}) {
  return (
    <section className="px-4 py-2 flex bg-gradient-to-r from-slate-800 to-transparent justify-between items-center" id='header'>
      <p className="p-2 text-3xl font-bold text-center text-white">Jongwon Lee</p>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  );
}