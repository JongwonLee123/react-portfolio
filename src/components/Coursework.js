import React from "react";

/*
   - cs102
   - cs116
   - cs124
   - cs125
   - Math103
   - Math101A-C
   - PHYS140-141
*/
export default function Coursework() {
  const courses_finished = [
    { name: "CS-102", description: "Intro to Programming Using C++" },
    { name: "CS-113", description: "Discrete Structures"},
    { name: "CS-116", description: "C++ Programming" },
    { name: "CS-118", description: "Intro Assembly Language Prog"},
    { name: "CS-124", description: "Programming W/ Data Structures" },
    { name: "CS-125", description: "Intro to Java" },
    { name: "MATH-103", description: "Intro to Linear Algebra" },
    { name: "MATH-104", description: "Differential Equations"},
    { name: "MATH-101A", description: "Calculus with Analytic Geom" },
    { name: "MATH-101B", description: "Calculus with Analytic Geom" },
    { name: "MATH-101C", description: "Calculus with Analytic Geom" },
    { name: "PHYS140", description: "Mechanics" },
    { name: "PHYS141", description: "Electricity and Magnetism" },
    { name: "PHYS-142", description: "Optics, Heat, & Modern Physics"},
  ];

  const courses_planned = [
    { name: "CS-170", description: "Intermediate Java Programming"},
    { name: "ENGI-130", description: "Electric Circuit Analysis"},
  ];

  // Chunk the courses into groups of 3 for each row
  const chunkedCourses = [];
  for (let i = 0; i < courses_finished.length; i += 3) {
    chunkedCourses.push(courses_finished.slice(i, i + 3));
  }

  const chunkedCoursesTwo = [];
  for (let i = 0; i < courses_finished.length; i += 3) {
   chunkedCoursesTwo.push(courses_planned.slice(i, i + 3));
 }

  return (
   <section className="pageBackground p-5 flex flex-col items-center justify-center flex-grow" id="course">
      <h2 className="rounded-lg text-2xl font-bold mb-4 text-white bg-black bg-opacity-60 p-2">Finished Courses</h2>
      <div className="grid grid-cols-3 gap-4 p-4" id="skills"  style={{ height: "fit-content", overflow: "hidden" }}>
        {chunkedCourses.map((courseRow, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-2">
            {courseRow.map((course, index) => (
              <div key={index} className="rounded-lg text-center bg-black bg-opacity-60 p-2">
                <p className="text-lg font-bold text-white">{course.name}</p>
                <p className="text-white">{course.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h2 className="rounded-lg text-2xl font-bold mb-4 text-white bg-black bg-opacity-60 p-2">Planned Courses</h2>
      <div className="grid grid-cols-3 gap-4 p-4" id="skills"  style={{ height: "fit-content", overflow: "hidden" }}>
        {courses_planned.map((course, index) => (
          <div key={index} className="rounded-lg text-center bg-black bg-opacity-60 p-2">
            <p className="text-lg font-bold text-white">{course.name}</p>
            <p className="text-white">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
