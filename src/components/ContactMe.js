// import { React, useState, useEffect } from "react";
// import emailValidation from "../utils/emailValidation";

// export default function ContactMe() {
//   const inputFormatting =
//     "p-2 m-1 ring ring-slate-600 hover:ring-slate-200 rounded-sm min-w-[300px] w-[40vw]";
//   const inputFormattingArea =
//     "p-2 m-1 ring ring-slate-600 hover:ring-slate-200 rounded-sm min-w-[300px] w-[40vw] h-[25vh]";

//   const [errorState, setErrorState] = useState(null);
//   const [formValues, setFormValues] = useState({
//     name: null,
//     email: null,
//     message: null,
//   });

//   useEffect(() => {
//     if (errorState !== null) {
//       alert(errorState);
//     }
//   }, [errorState, formValues]);

//   function formValidation(event) {
//     console.log("formValidation called...");
//     console.log(event);
//     console.log("pre-switch error state:", errorState);
//     switch (event.target.name) {
//       case "email":
//         console.log("triggered email validation");
//         emailValidation(event.target.value)
//           ? setErrorState(null)
//           : setErrorState("Invalid email");
//         break;
//       case "name":
//         event.target.value.length > 0
//           ? setErrorState(null)
//           : setErrorState("Name is a required field");
//         break;
//       case "message":
//         event.target.value.length > 0
//           ? setErrorState(null)
//           : setErrorState("Message is a required field");
//         break;
//       default:
//         setErrorState("You broke the form :(");
//     }
//     console.log("post-switch error state:", errorState);

//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.value,
//     });
//   }

//   function submitForm(event) {
//     event.preventDefault();
//     formValidation(event);
//     if (errorState !== null) {
//       console.log("Error: Form content invalid");
//     } else {
//       window.open(
//         `mailto:jongwon.lee+inquiries@gmail.com?subject=${`Inquiry from portfolio site from ${formValues.name}`}&body=${
//           formValues.message
//         }`
//       );
//     }
//   }

//   return (
//     <div className="flex justify-center">
//       <section
//         id="contactMe"
//         className="bg-slate-800/50 flex flex-col items-center w-fit justify-center p-01 m-1 rounded-md"
//       >
//         <form
//           className="flex flex-col w-4/5 md:w-2/3 lg:w-1/3 items-center p-5"
//           onSubmit={submitForm}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className={inputFormatting}
//             onBlur={formValidation}
//           ></input>
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             className={inputFormatting}
//             onBlur={formValidation}
//           ></input>
//           <input
//             type="text"
//             name="message"
//             placeholder="Message for Jongwon"
//             className={inputFormattingArea}
//             onBlur={formValidation}
//           ></input>
//           <button
//             type="submit"
//             className="rounded-full border-solid border-green-600 bg-green-300 hover:bg-green-400 focus:bg-green-500 w-[250px] border-4 p-1 m-1"
//           >
//             Submit
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }