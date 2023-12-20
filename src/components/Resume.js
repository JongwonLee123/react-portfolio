import {React, useEffect, useState} from "react";
import Iframe from 'react-iframe'
import resumePDF from "../assets/resume_2023_2024.pdf";

export default function Resume() {
  const [pdfSource, setpdfSource] = useState("") 

  useEffect(() => {
    setpdfSource(resumePDF)
  }, [])

  return (
    <div className="h-screen">
      <Iframe
        title="Resume Jan 2023"
        src={pdfSource}
        height="100%"
        width="100%"
        className=""
     />
    </div>
  );
}