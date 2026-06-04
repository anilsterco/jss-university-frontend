// "use client";
// import React, { useState } from "react";

// import styles from "./PhdForm.module.css";

// export default function PhDApplicationForm() {
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const payload = new FormData();

//   const [formData, setFormData] = useState({
//     applicant_name: "",
//     father_name: "",
//     mother_name: "",
//     gender: "",
//     dob: "",
//     age: "",
//     category: "",
//     nationality: "",
//     religion: "",
//     phone: "",
//     mobile: "",
//     email: "",
//     address: "",

//     tenth_institution: "",
//     tenth_board: "",
//     tenth_passing_year: "",
//     tenth_subject: "",
//     tenth_marks: "",
//     tenth_class_rank: "",

//     intermediate_institution: "",
//     intermediate_board: "",
//     intermediate_passing_year: "",
//     intermediate_subject: "",
//     intermediate_marks: "",
//     intermediate_class_rank: "",

//     bachelor_institution: "",
//     bachelor_board: "",
//     bachelor_passing_year: "",
//     bachelor_subject: "",
//     bachelor_marks: "",
//     bachelor_class_rank: "",

//     master_institution: "",
//     master_board: "",
//     master_passing_year: "",
//     master_subject: "",
//     master_marks: "",
//     master_class_rank: "",

//     mphil_institution: "",
//     mphil_board: "",
//     mphil_passing_year: "",
//     mphil_subject: "",
//     mphil_marks: "",
//     mphil_class_rank: "",

//     gate_institution: "",
//     gate_board: "",
//     gate_passing_year: "",
//     gate_subject: "",
//     gate_marks: "",
//     gate_class_rank: "",

//     published_articles: "",
//     awards: "",
//     other_particulars: "",
//     previous_registration_details: "",
//     research_area: "",
//     proposed_research_topic: "",

//     writeup_file: null,

//     not_working_declaration: false,
//     information_correct_declaration: false,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setErrors({});
//     setMessage("");

//     try {
//       const payload = new FormData();

//       Object.keys(formData).forEach((key) => {
//         if (
//           formData[key] !== null &&
//           formData[key] !== undefined
//         ) {
//           payload.append(key, formData[key]);
//         }
//       });

//       payload.append(
//         "experiences",
//         JSON.stringify(experiences)
//       );

//       payload.append(
//         "research_experiences",
//         JSON.stringify(researchExperiences)
//       );

//       const response = await fetch(
//         "https://project-demo.in/jss/api/phd-application-form",
//         {
//           method: "POST",
//           body: payload,
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         setMessage(
//           result.message ||
//           "PhD Application Submitted Successfully"
//         );

//         setShowPopup(true);

//         setTimeout(() => {
//           setShowPopup(false);
//         }, 3000);

//       } else {
//         setErrors(result.errors || {});
//         setMessage(result.message || "Validation Failed");
//       }

//     } catch (error) {
//       console.log(error);
//       setMessage("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };


//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };
//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       writeup_file: e.target.files[0],
//     });
//   };

//   const [experiences, setExperiences] = useState([
//     {
//       designation: "",
//       institution: "",
//       from: "",
//       to: "",
//       appointmentDate: "",
//     },
//   ]);
//   const [researchExperiences, setResearchExperiences] = useState([
//     {
//       designation: "",
//       fundingAgency: "",
//       from: "",
//       to: "",
//       theme: "",
//     },
//   ]);


//   const academicRows = [
//     "10th Std.",
//     "Intermediate/10+2/PUC",
//     "Bachelor's Degree",
//     "Master's Degree",
//     "M.Phil",
//     "GATE/NET/Others",
//   ];


//   const addExperience = () => {
//     setExperiences([
//       ...experiences,
//       {
//         designation: "",
//         institution: "",
//         from: "",
//         to: "",
//         appointmentDate: "",
//       },
//     ]);
//   };

//   const addResearchExperience = () => {
//     setResearchExperiences([
//       ...researchExperiences,
//       {
//         designation: "",
//         fundingAgency: "",
//         from: "",
//         to: "",
//         theme: "",
//       },
//     ]);
//   };

//   return (
//     <div className={`container ${styles.formContainer}`}>
//       <form onSubmit={handleSubmit}>
//         <h1 className={styles.mainTitle}>
//           JSS University Noida - Ph.D Application Form
//         </h1>

//         <section className={styles.FormSec}>
//           <h2 className={styles.sectionTitle}>Personal Details</h2>

//           <div className={styles.formGrid}>
//             <input
//               type="text"
//               name="applicant_name"
//               placeholder="Applicant Name (CAPITAL LETTERS)"
//               className={styles.input}
//               value={formData.applicant_name}
//               onChange={handleChange}
//             />

//             <input
//               type="text"
//               name="father_name"
//               placeholder="Father/Guardian Name"
//               className={styles.input}
//               value={formData.father_name}
//               onChange={handleChange}
//             />

//             <input
//               type="text"
//               name="mother_name"
//               placeholder="Mother Name"
//               className={styles.input}
//               value={formData.mother_name}
//               onChange={handleChange}
//             />

//             <select
//               name="gender"
//               className={styles.input}
//               onChange={handleChange}
//               value={formData.gender}
//             >
//               <option value="">Select Gender</option>
//               <option value={formData.Male}>Male</option>
//               <option value={formData.Female}>Female</option>
//             </select>

//             <input
//               type="date"
//               name="dob"
//               className={styles.input}
//               value={formData.dob}
//               onChange={handleChange}
//             />

//             <input
//               type="number"
//               name="age"
//               placeholder="Age"
//               className={styles.input}
//               value={formData.age}
//               onChange={handleChange}
//             />

//             <select
//               name="category"
//               className={styles.input}
//               value={formData.category}
//               onChange={handleChange}
//             >
//               <option value="">Category</option>
//               <option value={GN}>GN</option>
//               <option value={OBC}>OBC</option>
//               <option value={SC}>SC</option>
//               <option value={ST}>ST</option>
//               <option value={Others}>Others</option>
//             </select>

//             <input
//               type="text"
//               name="nationality"
//               placeholder="Nationality"
//               className={styles.input}
//               value={formData.nationality}
//               onChange={handleChange}
//             />

//             <input
//               type="text"
//               name="religion"
//               placeholder="Religion"
//               className={styles.input}
//               value={formData.religion}
//               onChange={handleChange}
//             />



//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               className={styles.input}
//               onChange={handleChange}
//             />

//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               placeholder="Mobile"
//               className={styles.input}
//               onChange={handleChange}
//             />

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               placeholder="Email"
//               className={styles.input}
//               onChange={handleChange}
//             />

//             <textarea
//               name="address"
//               placeholder="Address for Communication"
//               value={formData.address}
//               className={styles.textarea}
//               rows="1"
//               onChange={handleChange}
//             />
//           </div>
//         </section>

//         <section className={styles.FormSec}>
//           <h2 className={styles.sectionTitle}>Academic Details</h2>

//           {academicRows.map((qualification, index) => (
//             <div key={index} className={styles.academicBlock}>
//               <h3 className={styles.subHeading}>{qualification}</h3>

//               <div className={styles.formGrid}>
//                 <input
//                   type="text"
//                   placeholder="Name of School / College / Institution / University"
//                   className={styles.input}
//                   value={formData.tenth_institution}
//                 />

//                 <input
//                   type="text"
//                   placeholder="Board / University"
//                   className={styles.input}
//                   value={formData.tenth_board}
//                 />

//                 <input
//                   type="text"
//                   placeholder="Month and Year of Passing"
//                   className={styles.input}
//                   value={formData.tenth_passing_year}
//                 />

//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className={styles.input}
//                   value={formData.tenth_subject}
//                 />

//                 <input
//                   type="text"
//                   placeholder="% Marks"
//                   className={styles.input}
//                   value={formData.tenth_marks}
//                 />

//                 <input
//                   type="text"
//                   placeholder="Class / Rank"
//                   className={styles.input}
//                   value={formData.tenth_class_rank}
//                 />
//               </div>
//             </div>
//           ))}

//           <p className={styles.note}>
//             * Attach copies of all relevant certificates.
//           </p>
//         </section>


//         <section className={styles.FormSec}>
//           <div className={styles.sectionHeader}>
//             <h2 className={styles.sectionTitle}>
//               Teaching / Professional Experience
//             </h2>

//             <button
//               type="button"
//               className={styles.addBtn}
//               onClick={addExperience}
//             >
//               + Add Experience
//             </button>
//           </div>

//           {experiences.map((exp, index) => (
//             <div key={index} className={styles.experienceCard}>
//               <div className={styles.cardTitle}>
//                 Experience {index + 1}
//               </div>

//               <div className={styles.formGrid}>
//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>Designation</span>
//                   <input
//                     type="text"
//                     placeholder="Enter Designation"
//                     className={styles.input}
//                   />
//                 </div>

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>Institution</span>
//                   <input
//                     type="text"
//                     placeholder="Enter Institution"
//                     className={styles.input}
//                   />
//                 </div>

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>From Date</span>
//                   <input
//                     type="date"
//                     className={styles.input}
//                   />
//                 </div>s

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>To Date</span>
//                   <input
//                     type="date"
//                     className={styles.input}
//                   />
//                 </div>

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>
//                     Date of Appointment
//                   </span>
//                   <input
//                     type="date"
//                     className={styles.input}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>

//         <section className={styles.FormSec}>
//           <div className={styles.sectionHeader}>
//             <h2 className={styles.sectionTitle}>
//               Research Experience Details
//             </h2>

//             <button
//               type="button"
//               className={styles.addBtn}
//               onClick={addResearchExperience}
//             >
//               + Add Research Experience
//             </button>
//           </div>

//           {researchExperiences.map((item, index) => (
//             <div key={index} className={styles.experienceCard}>
//               <div className={styles.cardTitle}>
//                 Research Experience {index + 1}
//               </div>

//               <div className={styles.formGrid}>

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>
//                     Designation / Fellowship
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="JRF / SRF / Research Associate"
//                     className={styles.input}
//                   />
//                 </div>

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>
//                     Funding Agency
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="Enter Funding Agency"
//                     className={styles.input}
//                   />
//                 </div>

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>
//                     From Date
//                   </span>
//                   <input
//                     type="date"
//                     className={styles.input}
//                   />
//                 </div>

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>
//                     To Date
//                   </span>
//                   <input
//                     type="date"
//                     className={styles.input}
//                   />
//                 </div>

//                 <div className={styles.fieldGroup}>
//                   <span className={styles.fieldLabel}>
//                     Theme of Research
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="Enter Research Theme"
//                     className={styles.input}
//                   />
//                 </div>

//               </div>
//             </div>
//           ))}
//         </section>


//         <section className={styles.FormSec}>
//           <h2 className={styles.sectionTitle}>Additional Information</h2>

//           <div className={styles.formGrid}>
//             <textarea
//               placeholder="Published Articles / Research Papers / Books"
//               className={styles.textarea}
//               rows="4"
//             />

//             <textarea
//               placeholder="Awards, Medals, Prizes and Honors"
//               className={styles.textarea}
//               rows="4"
//             />

//             <textarea
//               placeholder="Any Other Particulars"
//               className={styles.textarea}
//               rows="4"
//             />

//             <textarea
//               placeholder="Previous Ph.D / M.Phil Registration Details"
//               className={styles.textarea}
//               rows="4"
//             />

//             <textarea
//               placeholder="Broad Field / Area of Research"
//               className={styles.textarea}
//               rows="4"
//             />

//             <textarea
//               placeholder="Proposed Research Topic"
//               className={styles.textarea}
//               rows="4"
//             />

//             <label className={styles.uploadLabel}>
//               Attach One Page Write-up
//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleFileChange}
//               />
//             </label>
//           </div>
//         </section>

//         {/* Declaration */}
//         <section className={styles.declarationSection}>
//           <label className={styles.checkboxLabel}>
//             <input
//               type="checkbox"
//               name="not_working_declaration"
//               checked={formData.not_working_declaration}
//               onChange={handleChange}
//             />
//             I declare that I am not working anywhere either on a
//             Full-time or Part-time basis.
//           </label>

//           <label className={styles.checkboxLabel}>
//             <input
//               type="checkbox"
//               name="information_correct_declaration"
//               checked={formData.information_correct_declaration}
//               onChange={handleChange}
//             />
//             I declare that the information furnished above is correct
//             and I shall abide by the rules and regulations of
//             JSS University Noida.
//           </label>



//           <button
//             type="submit"
//             className={styles.submitBtn}
//           >
//             Submit Application
//           </button>
//         </section>
//       </form>
//     </div>
//   );
// }