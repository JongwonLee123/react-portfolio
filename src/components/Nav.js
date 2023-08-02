import React from "react";

export default function Nav({ pages, setCurrentPage, currentPage, showHomeLinks }) {
  // const handleNavigation = (page) => {
  //   setCurrentPage(page);
  //   // If the user clicks on "Home" navigation, scroll to the top of the page
  //   if (showHomeLinks && (page === "aboutMe" || page === "hobbies")) {
  //     window.scrollTo(0, 0);
  //   }
  // };

  return (
    <ul className="m-1 p-1 text-xl text-white whitespace-nowrap">
      <li onClick={() => setCurrentPage(pages[0])} className={currentPage === 'home' ? 'font-extrabold' : ''}>
        Home
      </li>

      {showHomeLinks && (
        <>
          {/* <li onClick={() => handleNavigation("aboutMe")} className={currentPage === 'aboutMe' ? 'font-extrabold' : ''}>
            About Me
          </li>
          <li onClick={() => handleNavigation("hobbies")} className={currentPage === 'hobbies' ? 'font-extrabold' : ''}>
            Hobbies
          </li> */}
          <li onClick={() => setCurrentPage(pages[1])} className={currentPage === 'portfolio' ? 'font-extrabold' : ''}>
            Projects
          </li>
          <li onClick={() => setCurrentPage(pages[2])} className={currentPage === 'resume' ? 'font-extrabold' : ''}>
            Resume
          </li>
          <li onClick={() => setCurrentPage(pages[3])} className={currentPage === 'course' ? 'font-extrabold' : ''}>
            Coursework
          </li>
          <li onClick={() => setCurrentPage(pages[4])} className={currentPage === 'skills' ? 'font-extrabold' : ''}>
            Skills
          </li>
          <li onClick={() => setCurrentPage(pages[5])} className={currentPage === 'volunteer' ? 'font-extrabold' : ''}>
            Volunteer/Leadership
          </li>
        </> 
      )}

      {!showHomeLinks && currentPage !== "home" && currentPage !== "aboutMe" && currentPage !== "hobbies" && (
        <>
          <li onClick={() => setCurrentPage(pages[1])} className={currentPage === 'portfolio' ? 'font-extrabold' : ''}>
            Projects
          </li>
          <li onClick={() => setCurrentPage(pages[2])} className={currentPage === 'resume' ? 'font-extrabold' : ''}>
            Resume
          </li>
          <li onClick={() => setCurrentPage(pages[3])} className={currentPage === 'course' ? 'font-extrabold' : ''}>
            Coursework
          </li>
          <li onClick={() => setCurrentPage(pages[4])} className={currentPage === 'skills' ? 'font-extrabold' : ''}>
            Skills
          </li>
          <li onClick={() => setCurrentPage(pages[5])} className={currentPage === 'volunteer' ? 'font-extrabold' : ''}>
            Volunteer/Leadership
          </li>
        </>
      )}
    </ul>
  );
}
