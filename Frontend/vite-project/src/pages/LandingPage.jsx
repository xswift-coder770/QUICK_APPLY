// // src/pages/LandingPage.jsx
// import Aurora from "../components/ui/Aurora";
// import StarBorder from "../components/ui/StarBorder";
// import ChromaGrid from "../components/ui/ChromaGrid";

// const chromaItems = [
//   {
//     image: "https://i.pravatar.cc/300?img=1",
//     title: "Sarah Johnson",
//     subtitle: "Frontend Developer",
//     handle: "@sarahjohnson",
//     borderColor: "#3B82F6",
//     gradient: "linear-gradient(145deg, #3B82F6, #000)",
//     url: "https://github.com/sarahjohnson"
//   },
//   {
//     image: "https://i.pravatar.cc/300?img=2",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen"
//   },
//   {
//     image: "https://i.pravatar.cc/300?img=3",
//     title: "Morgan Blake",
//     subtitle: "UI/UX Designer",
//     handle: "@morganblake",
//     borderColor: "#F59E0B",
//     gradient: "linear-gradient(165deg, #F59E0B, #000)",
//     url: "https://dribbble.com/"
//   },
//   {
//     image: "https://i.pravatar.cc/300?img=4",
//     title: "Tyler Rodriguez",
//     subtitle: "Cloud Architect",
//     handle: "@tylerrod",
//     borderColor: "#06B6D4",
//     gradient: "linear-gradient(135deg, #06B6D4, #000)",
//     url: "https://aws.amazon.com/"
//   }
// ];

// export default function LandingPage() {
//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Aurora Background */}
//       <div className="absolute top-0 left-0 w-full h-[50vh] z-0">
//         <Aurora
//           colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
//           blend={0.5}
//           amplitude={1.0}
//           speed={0.5}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-24">
//         {/* Navbar */}
//         <nav className="w-full flex justify-between items-center py-4">
//           <h1 className="text-xl font-semibold">QuickApply</h1>
//           <button className="bg-white text-black rounded px-4 py-2 font-semibold">Login</button>
//         </nav>

//         {/* Header Section */}
//         <h2 className="text-5xl font-bold text-center mt-6 mb-4">QuickApply</h2>

//         {/* Hero Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-6xl mt-6">
//           {/* Text Content */}
//           <div className="flex-1 mb-10 lg:mb-0">
//             <p className="text-xl text-gray-300 mb-4">All Your Job Application Data, In One Place.</p>
//             <p className="text-md text-gray-400 mb-4">Store, Summarize, Copy, Apply. Smarter & Faster.</p>
//             <button className="mt-4 px-6 py-3 bg-white text-black font-bold rounded shadow-lg">Get Started</button>
//           </div>

//           {/* Chroma Grid */}
//           <div className="flex-1">
//             <div style={{ height: "600px", position: "relative" }}>
//               <ChromaGrid
//                 items={chromaItems}
//                 radius={300}
//                 damping={0.45}
//                 fadeOut={0.6}
//                 ease="power3.out"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Features Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-6xl">
//           {["Easy Copy", "Easy Store", "Organized", "AI Rephrase"].map((text, index) => (
//             <StarBorder key={index} color="cyan">
//               {text}
//             </StarBorder>
//           ))}
//         </div>

//         {/* Footer */}
//         <footer className="mt-24 text-sm text-gray-400 text-center">
//           Made with ❤️ by Gaurav
//         </footer>
//       </div>
//     </div>
//   );
// }

// // src/pages/LandingPage.jsx
// import Aurora from "../components/ui/Aurora";
// import StarBorder from "../components/ui/StarBorder";
// import SpotlightCard from "../components/ui/SpotlightCard";
// import ChromaGrid from "../components/ui/ChromaGrid";

// const items = [
//   {
//     title: "Easy Store and Copy",
//     subtitle: "Save resumes effortlessly",
//     handle: "@storage",
//     borderColor: "#4F46E5",
//     gradient: "linear-gradient(145deg, #4F46E5, #000)",
//     url: "#",

//   },
//   // {
//   //   title: "Easy Copy",
//   //   subtitle: "One-click clipboard",
//   //   handle: "@copy",
//   //   borderColor: "#10B981",
//   //   gradient: "linear-gradient(210deg, #10B981, #000)",
//   //   url: "#",
//   // },
//   {
//     title: "Organized",
//     subtitle: "Keep applications sorted",
//     handle: "@organize",
//     borderColor: "#F59E0B",
//     gradient: "linear-gradient(165deg, #F59E0B, #000)",
//     url: "#",
//   },
//   {
//     title: "AI Rephrase",
//     subtitle: "Smarter edits with AI",
//     handle: "@ai",
//     borderColor: "#EF4444",
//     gradient: "linear-gradient(195deg, #EF4444, #000)",
//     url: "#",
//   },
// ];

// export default function LandingPage() {
//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">

//       {/* Main Content */}
//       <div className="relative z-10 min-h-screen px-1 md:px-12 lg:px-24 flex flex-col">
//         {/* Header */}
//         <header className="w-full py-60 text-center">
//           <h1 className=" text-5xl md:text-6xl font-extrabold text-white">QuickApply</h1>
//         </header>

//         {/* Hero Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-16 gap-10">
//           <div className="md:w-1/2">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               All Your Job Application Data, In One Place.
//             </h2>
//             <p className="text-lg text-gray-300 mb-6">
//               Store, Summarize, Copy, Apply. Smarter & Faster.
//             </p>
//             <button className="ml-[28rem] mb-[5rem] bg-white text-black font-semibold px-6 py-3 rounded-md">
//               Get Started
//             </button>
//           </div>

//           <div className="grid-cols-4  md:w-2 flex justify-center">
//             <ChromaGrid items={items} />
//           </div>
//         </div>

//         {/* Features Section */}
//        {/* Features Section */}
// <div className=" mt-[1rem] grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-20 w-full max-w-6xl mx-auto">
//   {items.map((item, index) => (
//     <div key={index} className="flex justify-center">
//       <StarBorder color="cyan">
//         {item.title}
//       </StarBorder>
//     </div>
//   ))}
// </div>

//         {/* Footer */}
//         <footer className="mt-24 text-sm text-gray-400 text-center">
//           Made with ❤️ by Gaurav
//         </footer>
//       </div>
//     </div>
//   );
// }

//working landing page acha wala ye hai checkpoint hai ye
// // src/pages/LandingPage.jsx
// import { useEffect, useRef, useState, useMemo } from 'react';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText as GSAPSplitText } from "gsap/SplitText";
// import { motion } from 'framer-motion';
// import StarBorder from "../components/ui/StarBorder";
// import ChromaGrid from "../components/ui/ChromaGrid";

// import { useNavigate } from "react-router-dom";

// // GSAP Plugin Registration
// gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

// // SplitText Component
// const SplitText = ({
//   text,
//   className = "",
//   delay = 100,
//   duration = 0.6,
//   ease = "power3.out",
//   splitType = "chars",
//   from = { opacity: 0, y: 40 },
//   to = { opacity: 1, y: 0 },
//   threshold = 0.1,
//   rootMargin = "-100px",
//   textAlign = "center",
//   onLetterAnimationComplete,
// }) => {
//   const ref = useRef(null);
//   const animationCompletedRef = useRef(false);

//   useEffect(() => {
//     if (!ref.current || animationCompletedRef.current) return;

//     const split = new GSAPSplitText(ref.current, { type: splitType });
//     gsap.fromTo(
//       split[splitType],
//       from,
//       {
//         ...to,
//         ease,
//         stagger: delay / 1000,
//         duration,
//         scrollTrigger: {
//           trigger: ref.current,
//           start: "top 90%",
//           toggleActions: "play none none reverse",
//           onComplete: () => {
//             animationCompletedRef.current = true;
//             if (onLetterAnimationComplete) onLetterAnimationComplete();
//           },
//         },
//       }
//     );
//   }, []);

//   return <div ref={ref} className={className} style={{ textAlign }}>{text}</div>;
// };

// // BlurText Component
// const buildKeyframes = (from, steps) => {
//   const keys = new Set([
//     ...Object.keys(from),
//     ...steps.flatMap((s) => Object.keys(s)),
//   ]);
//   const keyframes = {};
//   keys.forEach((k) => {
//     keyframes[k] = [from[k], ...steps.map((s) => s[k])];
//   });
//   return keyframes;
// };

// const BlurText = ({
//   text = '',
//   delay = 200,
//   className = '',
//   animateBy = 'words',
//   direction = 'top',
//   onAnimationComplete,
// }) => {
//   const split = animateBy === 'words' ? text.split(' ') : text.split('');
//   const directions = {
//     top: { y: 20 },
//     bottom: { y: -20 },
//     left: { x: 20 },
//     right: { x: -20 },
//   };
//   const from = { opacity: 0, filter: 'blur(5px)', ...directions[direction] };
//   const to = { opacity: 1, filter: 'blur(0px)', x: 0, y: 0 };

//   return (
//     <div className={`inline-block ${className}`}>
//       {split.map((part, i) => (
//         <motion.span
//           key={i}
//           initial={from}
//           animate={to}
//           transition={{ delay: i * (delay / 1000), duration: 0.5 }}
//           onAnimationComplete={() => {
//             if (i === split.length - 1 && onAnimationComplete) onAnimationComplete();
//           }}
//         >
//           {part}{animateBy === 'words' ? ' ' : ''}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// // Items array
// const items = [
//   {
//     title: "Easy Store and Copy",
//     subtitle: "Save resumes effortlessly",
//     handle: "@storage",
//     borderColor: "#4F46E5",
//     gradient: "linear-gradient(145deg, #4F46E5, #000)",
//     url: "#",
//   },
//   {
//     title: "Organized",
//     subtitle: "Keep applications sorted",
//     handle: "@organize",
//     borderColor: "#F59E0B",
//     gradient: "linear-gradient(165deg, #F59E0B, #000)",
//     url: "#",
//   },
//   {
//     title: "AI Rephrase",
//     subtitle: "Smarter edits with AI",
//     handle: "@ai",
//     borderColor: "#EF4444",
//     gradient: "linear-gradient(195deg, #EF4444, #000)",
//     url: "#",
//   },
// ];

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <button onClick={() => navigate("/login")}>Login</button>
//   );
// };

//ye ai integration se pahel bhut acha kam kar rha tha

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText as GSAPSplitText } from "gsap/SplitText";
// import { motion } from "framer-motion";
// import StarBorder from "../components/ui/StarBorder";
// import ChromaGrid from "../components/ui/ChromaGrid";
// import { useNavigate } from "react-router-dom";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

// // SplitText Component
// const SplitText = ({
//   text,
//   className = "",
//   delay = 100,
//   duration = 0.6,
//   ease = "power3.out",
//   splitType = "chars",
//   from = { opacity: 0, y: 40 },
//   to = { opacity: 1, y: 0 },
//   threshold = 0.1,
//   rootMargin = "-100px",
//   textAlign = "center",
//   onLetterAnimationComplete,
// }) => {
//   const ref = useRef(null);
//   const animationCompletedRef = useRef(false);

//   useEffect(() => {
//     if (!ref.current || animationCompletedRef.current) return;

//     const split = new GSAPSplitText(ref.current, { type: splitType });
//     gsap.fromTo(split[splitType], from, {
//       ...to,
//       ease,
//       stagger: delay / 1000,
//       duration,
//       scrollTrigger: {
//         trigger: ref.current,
//         start: "top 90%",
//         toggleActions: "play none none reverse",
//         onComplete: () => {
//           animationCompletedRef.current = true;
//           if (onLetterAnimationComplete) onLetterAnimationComplete();
//         },
//       },
//     });
//   }, []);

//   return (
//     <div ref={ref} className={className} style={{ textAlign }}>
//       {text}
//     </div>
//   );
// };

// // BlurText Component
// const BlurText = ({
//   text = "",
//   delay = 200,
//   className = "",
//   animateBy = "words",
//   direction = "top",
//   onAnimationComplete,
// }) => {
//   const split = animateBy === "words" ? text.split(" ") : text.split("");
//   const directions = {
//     top: { y: 20 },
//     bottom: { y: -20 },
//     left: { x: 20 },
//     right: { x: -20 },
//   };
//   const from = { opacity: 0, filter: "blur(5px)", ...directions[direction] };
//   const to = { opacity: 1, filter: "blur(0px)", x: 0, y: 0 };

//   return (
//     <div className={`inline-block ${className}`}>
//       {split.map((part, i) => (
//         <motion.span
//           key={i}
//           initial={from}
//           animate={to}
//           transition={{ delay: i * (delay / 1000), duration: 0.5 }}
//           onAnimationComplete={() => {
//             if (i === split.length - 1 && onAnimationComplete)
//               onAnimationComplete();
//           }}
//         >
//           {part}
//           {animateBy === "words" ? " " : ""}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// // Items array
// const items = [
//   {
//     title: "Easy Store and Copy",
//     subtitle: "Save resumes effortlessly",
//     handle: "@storage",
//     borderColor: "#4F46E5",
//     gradient: "linear-gradient(145deg, #4F46E5, #000)",
//     url: "#",
//   },
//   {
//     title: "Organized",
//     subtitle: "Keep applications sorted",
//     handle: "@organize",
//     borderColor: "#F59E0B",
//     gradient: "linear-gradient(165deg, #F59E0B, #000)",
//     url: "#",
//   },
//   {
//     title: "AI Rephrase",
//     subtitle: "Smarter edits with AI",
//     handle: "@ai",
//     borderColor: "#EF4444",
//     gradient: "linear-gradient(195deg, #EF4444, #000)",
//     url: "#",
//   },
// ];

// // ✅ Main Landing Page Component
// export default function LandingPage() {
//   const navigate = useNavigate();

//   const handleLogin = () => navigate("/login");

//   const handleAboutUs = () => {
//     //uncommite changes jo abhi maine kiya hai
//     navigate("/about");
//   };

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Navigation Bar */}
//       <nav className="fixed top-0 left-0 w-full px-3 py-4 flex justify-between items-center bg-black z-50">
//         <h5 className="ml-[-10rem] font-bold text-white">QuickApply</h5>
//         <div className="flex gap-4 mr-[20rem] mt-[2rem]">
//           <button
//             onClick={handleAboutUs}
//             className="text-white hover:text-cyan-400 transition duration-300"
//           >
//             About Us
//           </button>

//           <StarBorder color="cyan">
//             <button
//               onClick={handleLogin}
//               className="text-white hover:text-cyan-400 transition duration-300"
//             >
//               Login
//             </button>
//           </StarBorder>
//         </div>
//       </nav>

//       <div className="relative z-10 min-h-screen px-1 md:px-12 lg:px-24 pt-36 flex flex-col">
//         {/* Heading */}
//         <header className="mt-[6rem] w-full py-60 text-center">
//           <SplitText
//             text="QuickApply"
//             className="text-[4.5rem] md:text-[6rem] font-extrabold text-white"
//             delay={100}
//             duration={0.6}
//             ease="power3.out"
//             splitType="chars"
//             from={{ opacity: 0, y: 40 }}
//             to={{ opacity: 1, y: 0 }}
//             threshold={0.1}
//             rootMargin="-100px"
//             textAlign="center"
//             onLetterAnimationComplete={() =>
//               console.log("Heading animation done!")
//             }
//           />
//         </header>

//         {/* Hero Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-16 gap-10">
//           <div className="md:w-1/2">
//             <BlurText
//               text="Keep All Your Job Application Data, In One Place."
//               delay={150}
//               animateBy="words"
//               direction="top"
//               className="text-[2.75rem] md:text-[3.5rem] font-bold mb-6"
//               onAnimationComplete={() =>
//                 console.log("Subheading animation completed!")
//               }
//             />
//             <p className="text-lg text-gray-300 mb-4 mb-[4rem]"></p>
//             <StarBorder color="cyan">
//               <button
//                 onClick={handleLogin}
//                 className="bg-white text-black font-semibold px-4 py-2 rounded-md"
//               >
//                 Get Started
//               </button>
//             </StarBorder>
//           </div>

//           <div className="mt-[2rem] grid-cols-4 md:w-2 flex justify-center">
//             <ChromaGrid items={items} />
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="mt-24 text-sm text-gray-400 text-center">
//           Made with ❤️ by Gaurav
//         </footer>
//       </div>
//     </div>
//   );
// }






















// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import { Copy } from "lucide-react";
// import GradientText from "../components/ui/GradientText";

// const Dashboard = () => {
//   const [driveLinks, setDriveLinks] = useState([
//     { label: "LinkedIn", value: "" },
//     { label: "GitHub Profile", value: "" },
//     { label: "GitHub Repo", value: "" },
//     { label: "Project Drive", value: "" },
//     { label: "Resume Drive", value: "" },
//   ]);
//   const [directLinks, setDirectLinks] = useState([
//     { label: "LinkedIn", value: "" },
//     { label: "GitHub Profile", value: "" },
//     { label: "GitHub Repo", value: "" },
//     { label: "Live Project", value: "" },
//   ]);
//   const [summary, setSummary] = useState({
//     whyHire: "",
//     whyFit: "",
//     experience: "",
//   });

//   const handleCopy = (value) => {
//     navigator.clipboard.writeText(value);
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     window.location.href = "/";
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#150018] text-white">
//       <header className="w-full px-6 lg:px-20 py-4 flex justify-between items-center">
//         <h1 className="ml-[20rem] mr-[20rem] text-xl font-bold">Welcome, {auth.currentUser?.displayName || "User"}!</h1>
//         <button onClick={handleLogout} className="bg-black text-white px-4 py-2 rounded-md">Logout</button>
//       </header>

//       <div className="w-full px-10 lg:px-20 py-10">
//         <h2 className="text-4xl font-bold text-center mb-10">
//           <GradientText colors={["#00f0ff", "#1e90ff", "#00f0ff"]}>Your Dashboard</GradientText>
//         </h2>

//         {/* Google Drive Links */}
//         <section className="mb-[5rem] mt-[5rem]">
//           <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
//             <span>📁</span> Google Drive Links
//           </h3>
//           {driveLinks.map((link, idx) => (
//             <div key={idx} className="flex items-center gap-2 mb-4">
//               <label className="rounded-lg bg-purple-700/30 px-4 py-2 backdrop-blur-md shadow-md w-64 text-right">
//                 <GradientText>{link.label}</GradientText>
//               </label>
//               <input
//                 type="text"
//                 value={link.value}
//                 onChange={(e) => {
//                   const updated = [...driveLinks];
//                   updated[idx].value = e.target.value;
//                   setDriveLinks(updated);
//                 }}
//                 placeholder={`Paste ${link.label} URL`}
//                 className=" w-[20rem] px-4 py-2 bg-[#1f1f1f] text-white rounded-md border border-gray-600"
//               />
//               <button
//                 onClick={() => handleCopy(link.value)}
//                 className="bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
//               >
//                 <Copy size={18} />
//               </button>
//             </div>
//           ))}
//           <button
//             className="mt-4 bg-black text-white px-4 py-2 rounded-md"
//             onClick={() => setDriveLinks([...driveLinks, { label: "New Link", value: "" }])}
//           >
//             + Add Link
//           </button>
//         </section>

//         {/* Direct Links */}
//         <section className="mb-12">
//           <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
//             <span>🔗</span> Direct Links
//           </h3>
//           {directLinks.map((link, idx) => (
//             <div key={idx} className="flex items-center gap-2 mb-4">
//               <label className="rounded-lg bg-purple-700/30 px-4 py-2 backdrop-blur-md shadow-md w-64 text-right">
//                 <GradientText>{link.label}</GradientText>
//               </label>
//               <input
//                 type="text"
//                 value={link.value}
//                 onChange={(e) => {
//                   const updated = [...directLinks];
//                   updated[idx].value = e.target.value;
//                   setDirectLinks(updated);
//                 }}
//                 placeholder={`Paste ${link.label} URL`}
//                 className=" w-[20rem] px-4 py-2 bg-[#1f1f1f] text-white rounded-md border border-gray-600"
//               />
//               <button
//                 onClick={() => handleCopy(link.value)}
//                 className="bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
//               >
//                 <Copy size={18} />
//               </button>
//             </div>
//           ))}
//           <button
//             className="mt-4 bg-black text-white px-4 py-2 rounded-md"
//             onClick={() => setDirectLinks([...directLinks, { label: "New Link", value: "" }])}
//           >
//             + Add Link
//           </button>
//         </section>

//         {/* Summary Section */}
//         <section>
//           <h3 className="text-2xl font-semibold mb-6">📝 Summary Section</h3>
//           {Object.entries(summary).map(([key, value], idx) => (
//             <div key={idx} className="mb-4">
//               <label className="block mb-1 text-lg capitalize text-white">
//                 <GradientText>{key.replace(/([A-Z])/g, " $1")}</GradientText>
//               </label>
//               <textarea
//                 rows={4}
//                 value={value}
//                 onChange={(e) => setSummary({ ...summary, [key]: e.target.value })}
//                 className="w-full px-4 py-2 bg-[#1f1f1f] text-white rounded-md border border-gray-600"
//                 placeholder={`Type your ${key.replace(/([A-Z])/g, " $1").toLowerCase()}...`}
//               ></textarea>
//               <button
//                 onClick={() => handleCopy(value)}
//                 className="mt-2 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
//               >
//                 <Copy size={18} />
//               </button>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;































//acha hai ye wala updated 

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText as GSAPSplitText } from "gsap/SplitText";
// import { motion } from "framer-motion";
// import StarBorder from "../components/ui/StarBorder";
// import ChromaGrid from "../components/ui/ChromaGrid";
// import { useNavigate } from "react-router-dom";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

// // SplitText Component
// const SplitText = ({
//   text,
//   className = "",
//   delay = 100,
//   duration = 0.6,
//   ease = "power3.out",
//   splitType = "chars",
//   from = { opacity: 0, y: 40 },
//   to = { opacity: 1, y: 0 },
//   textAlign = "center",
//   onLetterAnimationComplete,
// }) => {
//   const ref = useRef(null);
//   const animationCompletedRef = useRef(false);

//   useEffect(() => {
//     if (!ref.current || animationCompletedRef.current) return;

//     const split = new GSAPSplitText(ref.current, { type: splitType });
//     gsap.fromTo(split[splitType], from, {
//       ...to,
//       ease,
//       stagger: delay / 1000,
//       duration,
//       scrollTrigger: {
//         trigger: ref.current,
//         start: "top 90%",
//         toggleActions: "play none none reverse",
//         onComplete: () => {
//           animationCompletedRef.current = true;
//           if (onLetterAnimationComplete) onLetterAnimationComplete();
//         },
//       },
//     });
//   }, []);

//   return (
//     <div ref={ref} className={className} style={{ textAlign }}>
//       {text}
//     </div>
//   );
// };

// // BlurText Component
// const BlurText = ({
//   text = "",
//   delay = 200,
//   className = "",
//   animateBy = "words",
//   direction = "top",
//   onAnimationComplete,
// }) => {
//   const split = animateBy === "words" ? text.split(" ") : text.split("");
//   const directions = {
//     top: { y: 20 },
//     bottom: { y: -20 },
//     left: { x: 20 },
//     right: { x: -20 },
//   };
//   const from = { opacity: 0, filter: "blur(5px)", ...directions[direction] };
//   const to = { opacity: 1, filter: "blur(0px)", x: 0, y: 0 };

//   return (
//     <div className={`inline-block ${className}`}>
//       {split.map((part, i) => (
//         <motion.span
//           key={i}
//           initial={from}
//           animate={to}
//           transition={{ delay: i * (delay / 1000), duration: 0.5 }}
//           onAnimationComplete={() => {
//             if (i === split.length - 1 && onAnimationComplete)
//               onAnimationComplete();
//           }}
//         >
//           {part}
//           {animateBy === "words" ? " " : ""}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// const items = [
//   {
//     title: "Easy Store and Copy",
//     subtitle: "Save resumes effortlessly",
//     handle: "@storage",
//     borderColor: "#4F46E5",
//     gradient: "linear-gradient(145deg, #4F46E5, #000)",
//     url: "#",
//   },
//   {
//     title: "Organized",
//     subtitle: "Keep applications sorted",
//     handle: "@organize",
//     borderColor: "#F59E0B",
//     gradient: "linear-gradient(165deg, #F59E0B, #000)",
//     url: "#",
//   },
//   {
//     title: "AI Rephrase",
//     subtitle: "Smarter edits with AI",
//     handle: "@ai",
//     borderColor: "#EF4444",
//     gradient: "linear-gradient(195deg, #EF4444, #000)",
//     url: "#",
//   },
// ];

// export default function LandingPage() {
//   const navigate = useNavigate();

//   const handleLogin = () => navigate("/login");
//   const handleAboutUs = () => navigate("/about");

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-black shadow-lg z-50">
//         <h5 className="text-xl font-bold">QuickApply</h5>
//         <div className="flex gap-4 items-center">
//           <StarBorder color="cyan">
//             <button
//               onClick={handleAboutUs}
//               className="rounded-full px-5 py-2 bg-white text-black font-medium hover:bg-cyan-400 hover:text-black transition duration-300 shadow-md hover:scale-105"
//             >
//               About Us
//             </button>
//           </StarBorder>
//           <StarBorder color="cyan">
//             <button
//               onClick={handleLogin}
//               className="rounded-full px-5 py-2 bg-white text-black font-medium hover:bg-cyan-400 hover:text-black transition duration-300 shadow-md hover:scale-105"
//             >
//               Login
//             </button>
//           </StarBorder>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="pt-36 px-4 md:px-12 lg:px-24 text-center">
//         <SplitText
//           text="QuickApply"
//           className="text-[3rem] md:text-[5rem] font-extrabold text-white"
//         />

//         <div className="mt-10 max-w-4xl mx-auto">
//           <BlurText
//             text="Keep All Your Job Application Data, In One Place."
//             delay={150}
//             animateBy="words"
//             direction="top"
//             className="text-[1.8rem] md:text-[2.5rem] font-bold"
//           />
//           <p className="text-gray-300 text-md mt-6 mb-10">
//             Save, organize, and smartly edit your resumes – all from one dashboard.
//           </p>
//           <StarBorder color="cyan">
//             <button
//               onClick={handleLogin}
//               className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg hover:scale-105"
//             >
//               Get Started
//             </button>
//           </StarBorder>
//         </div>

//         <div className="mt-20 flex justify-center">
//           <div className="w-full max-w-6xl">
//             <ChromaGrid items={items} />
//           </div>
//         </div>

//         <footer className="mt-24 text-sm text-gray-400 text-center">
//           Made with ❤️ by Gaurav
//         </footer>
//       </div>
//     </div>
//   );
// }





//best 

import React from "react";
import StarBorder from "../components/ui/StarBorder";
import ChromaGrid from "../components/ui/ChromaGrid";
import { useNavigate } from "react-router-dom";
import { BgCollision as BackgroundBeamsWithCollision } from "../components/ui/BgCollision"; // ✅ Use your file

const items = [
  {
    title: "Easy Store and Copy",
    subtitle: "Save resumes effortlessly",
    handle: "@storage",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "#",
  },
  {
    title: "Organized",
    subtitle: "Keep applications sorted",
    handle: "@organize",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "#",
  },
  {
    title: "AI Rephrase",
    subtitle: "Smarter edits with AI",
    handle: "@ai",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "#",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleAboutUs = () => navigate("/about");

  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-black shadow-lg z-50">
        <h1 className="text-white font-extrabold text-2xl">QuickApply</h1>
        <div className="flex gap-4">
          <StarBorder color="cyan">
            <button
              onClick={handleAboutUs}
              className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-cyan-400 transition"
            >
              About Us
            </button>
          </StarBorder>
          <StarBorder color="cyan">
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-cyan-400 transition"
            >
              Login
            </button>
          </StarBorder>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-40 px-6 md:px-24 z-10 relative">
        {/* Heading */}
        <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-6">
          QuickApply
        </h1>

        {/* Subheading */}
        <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Keep all your job application data in one place. Save resumes, track
          progress, and get AI-powered suggestions effortlessly.
        </p>

        {/* Get Started Button */}
        <div className="flex justify-center mb-16">
          <StarBorder color="cyan">
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-cyan-400 transition"
            >
              Get Started
            </button>
          </StarBorder>
        </div>

        {/* Chroma Grid */}
        <div className="flex justify-center mb-24">
          <div className="bg-black p-4 rounded-xl w-full max-w-5xl">
            <ChromaGrid items={items} />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12">
          Made with ❤️ by Gaurav
        </footer>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
