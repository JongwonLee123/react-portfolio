import React from "react";

/*
   Leadership
      - OES
      - ICC
   Volunteer
      - Super Saturday
      - Club Rush
*/
export default function Volunteer() {
   const text_1 = `Ohlone Engineering Society is a club at Ohlone College aimed to help bring together students of different 
   majors and work on skills that will appear in future careers. After joining OES, I became involved in the clubs affairs and 
   involved myself in club projects. I joined the leadership team by becoming the ICC representative of the club. Later, 
   I became the secretary of the club, scheduling 2-hour weekly meetings, composing meeting notes, and collaborating with 
   other organizations
   `;
   const text_2 = `The Inter-Club Council plan out club events and vote in new clubs. During meetings, I would be representing OES, deciding on any events
   , and informing the leadership team of any important events or deadlines. 
   `;
   const text_3 = `Super Saturday is an event that introduces some of Ohlone's different departments. Before the event, I helped code an Arduino cart to navigate
   a given path of black tape. To do so, I utilized the infrared sensors on the cart and designed the code to make corrections depending on the situation the cart was
   in with the pathing.
   `;
   const text_4 = `Club Rush aims in helping students become involved with each other by joining new clubs. I volunteered to represent OES and helped new students learn about 
   OES's projects and the workshops held to prepare students. 
   `;
   const leader = [
      { name: "Ohlone Engineering Society Secretary", description: text_1 },
      { name: "ICC Representative", description: text_2 },
   ];
   const volunteer = [
      { name: "Super Saturday", description: text_3 },
      { name: "Club Rush Spring 2023", description: text_4 },
   ];

   return (
    <section className="pageBackground flex flex-col items-center justify-center flex-grow" id="roles">
      <div className="w-max p-10" style={{ height: "fit-content", overflow: "hidden" }}>
        <div className="rounded p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <h2 className="text-white text-3xl font-bold mb-3 text-center">Leadership:</h2>
          {leader.map((skill, index) => (
            <div key={index} className="text-white mb-4">
              <h3 className="text-white text-2xl font-medium mb-3 text-center">{skill.name}</h3>
              <p className="text-white text-1xl font-small mb-3 max-w-[500px]">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <div className="w-max" style={{ height: "fit-content", overflow: "hidden" }}>
        <div className="rounded p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <h2 className="text-white text-3xl font-bold mb-2 text-center">Volunteering:</h2>
          {volunteer.map((skill, index) => (
            <div key={index} className="text-white mb-4">
              <h3 className="text-white text-2xl font-medium mb-3 text-center">{skill.name}</h3>
              <p className="text-white text-1xl font-small mb-3 max-w-[500px]">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow p-10"></div>
    </section>
  );
}
