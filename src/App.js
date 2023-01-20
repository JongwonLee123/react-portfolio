import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

function App() {
  const [darkMode, toggleDarkMode] = useState();
  const [pages] = useState(["aboutMe", "portfolio", "contactMe", "resume"]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className='bg-fixed bg-cover bg-top pageBackground max-w-screen relative'>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <Page currentPage={currentPage} />

      <Footer />
    </div>
  );
}

export default App;