"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiCashapp } from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

const about = {
  title: "About me",
  description: "Versatile developer skilled in frontend, systems, and Android development, with a passion for UI/UX design by Framer, Figma."+ 
  "Proficient in Cobol, Java, Javascript, and BaaS. Enjoys reading, gaming, and exploring new technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Thanh Thai",
    },
    {
      fieldName: "Phone",
      fieldValue: "0933 292 798",
    },
    {
      fieldName: "Experience",
      fieldValue: "6 Months - 1 Years",
    },
    {
      fieldName: "Twitter",
      fieldValue: "@thanhthai",
    },
    {
      fieldName: "Instagram",
      fieldValue: "thanhthaizero",
    },
    {
      fieldName: "Email",
      fieldValue: "thanhthaib2t2212@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Vietnamese, Japanese(In Progress)",
    },
  ],
};

const experience = {
  icon: "/assets/logos/experience.png",
  title: "Experience",
  description: "I have experience in Frontend Development, Backend Development, and Website Administrator Content. I have worked with many companies and have gained a lot of experience in the field of programming and design.",
  items: [
    {
      company: "FPT Software",
      position: "Frontend Developer (ReactJs, NextJs, BMS) & Backend Service Intern (Java, JavaSpring, Cobol)",
      duration: "11/2024 - ??/2025",
      img: "/assets/images/FPT-Software.png",
    },
    {
      company: "VNPT Customer Service Center",
      position: "Fullstack Developer Intern",
      duration: "05/2024 - 08/2024",
      img: "/assets/images/VNPT.jpg",
    },
    {
      company: "5GroupStars Company",
      position: "Website administrator content",
      duration: "2023 - 2024",
      img: "/assets/images/5Stars.png",
    },
  ],
};

const education = {
  icon: "/assets/logos/graduation.png",
  title: "My education",
  description:
    "I'm a student at Can Tho University, majoring in Information Systems." +
    "I have a passion for programming and design. My major specializing in GEO Information Systems, Management Information Systems, E-commerce Systems and Design UI/UX by Figma(Basic).",
  items: [
    {
      institution: "Online Course In F8",
      degree: "Frontend with HTML, CSS, JS, Bootstrap",
      duration: "2020",
      img: "/assets/images/F8.jpg",
    },
    {
      institution: "Codecademy",
      degree: "Fullstack Developer with React, PHP, HTML, CSS, JS",
      duration: "2020-2023",
      img: "/assets/images/codecademy.png",
    },
    {
      institution: "Can Tho University",
      degree: "Information Systems & Design UI/UX by Figma (Basic)",
      duration: "2020-2024",
      img: "/assets/images/dhct-logo.png",
    },
    {
      institution: "Coursera",
      degree: "Python course, Bussiness Analyst for Beginner",
      duration: "2020-2021",
      img: "/assets/images/Coursea.png",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "A passionate Frontend Developer with 1+ years of experience, adept at crafting responsive, user-friendly web applications using HTML/CSS and JavaScript frameworks, with a knack for problem-solving and excellent communication skills.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiCashapp />,
      name: "C#",
    },
    {
      icon: <TbBrandReactNative />,
      name: "React Native",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col xl:flex-row gap-[60px]"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[100vh] w-full">
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex 
                        flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          {/* image for card  */}
                          <div className="max-w-[30vw]">
                            <img
                              src={item.img}
                              alt={item.company}
                              className="w-[50px] h-[50px] object-contain mt-2 mix-blend-hard-light"
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex 
                        flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                          {/* image for card  */}
                          <div className="max-w-[30vw]">
                            <img
                              src={item.img}
                              alt={item.company}
                              className="w-[200px] h-[50px] object-contain mt-4 rounded-xl bg-accent p-2"
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent className="w-full" value="skills">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* <div className=""> */}
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                {/* </div> */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider
                          delayDuration={100}
                        >
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rouded-xl flex justify-center items-center group"
                            >
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent className="w-full text-center xl:text-left" value="about">
                <div className="flex flex-col gap-[30px]">
                  
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  

                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
