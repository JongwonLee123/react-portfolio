import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

function App() {
  const [darkMode, toggleDarkMode] = useState();
  const [pages] = useState([
    "home",
    "portfolio",
    "resume",
    "course",
    "skills",
    "volunteer"
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  // Determine if the current page is the Home page to show "About Me" and "Hobbies" links
  const showHomeLinks = currentPage === "home";

  return (
    <div className="bg-fixed bg-cover bg-top pageBackground max-w-screen relative">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        showHomeLinks={showHomeLinks}
      />

      <Page currentPage={currentPage} />

      <Footer />
    </div>
  );
}

export default App;
