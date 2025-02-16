"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "B2T Job-portal",
    description: "A comprehensive job portal for connecting employers and job seekers.",
    stack: [
      {
        name: "Javascript"
      },
      {
        name: "NodeJs"
      },
      {
        name: "ReactJs"
      },
      {
        name: "Clerk"
      },
      {
        name: "TailwindCss"
      }
    ],
    image: "/assets/images/work/job-portal.png",
    live: "",
    github: "https://github.com/ThanhThai-Dev/FS-Job-Portal",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Social Media App",
    description: "A social media platform to connect with friends, share updates, and engage with content.",
    stack: [
      {
        name: "React Native"
      },
      {
        name: "Appwrite"
      },
      {
        name: "Expo"
      },
      {
        name: "NativeWind"
      }
    ],
    image: "/assets/images/work/socials-media.jpg",
    live: "",
    github: "https://github.com/ThanhThai-Dev/Small-Socials-Media-Application",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Agricultural Trading App",
    description: "A platform for farmers and traders to buy and sell agricultural products efficiently.",
    stack: [
      {
        name: "React Native"
      },
      {
        name: "Firebase"
      },
      {
        name: "Expo"
      },
      {
        name: "Clerk"
      },
      {
        name: "NativeWind"
      }
    ],
    image: "/assets/images/work/Grocery-app.jpg",
    live: "",
    github: "https://github.com/ThanhThai-Dev/Agricultural-Trading-Application",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Sushi Template (Live)",
    description: "A modern and elegant template for sushi restaurants, showcasing menu items, chef specials, and customer reviews.",
    stack: [
      {
        name: "Html5"
      },
      {
        name: "Css3"
      },
      {
        name: "Javascript"
      },
      {
        name: "NodeJs"
      }
    ],
    image: "/assets/images/work/sushi.png",
    live: "https://sushi-temp.vercel.app/",
    github: "https://github.com/ThanhThai-Dev/sushi-template",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Xora Ai Saas (Live)",
    description: "A SaaS platform leveraging AI to provide intelligent solutions for businesses, enhancing productivity and efficiency.",
    stack: [
      {
        name: "ReactJs"
      },
      {
        name: "Javascript"
      },
      {
        name: "TailwindCss"
      }
    ],
    image: "/assets/images/work/xora.png",
    live: "https://xora-silk-five.vercel.app/",
    github: "https://github.com/ThanhThai-Dev/Xora",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Iphone Template (Live)",
    description: "A sleek and modern website template designed for showcasing the latest iPhone models and features.",
    stack: [
      {
        name: "ReactJs"
      },
      {
        name: "Javascript"
      },
      {
        name: "TailwindCss"
      },
      {
        name: "GSAP"
      }
    ],
    image: "/assets/images/work/iphone-web.png",
    live: "https://website-iphone-b2t.vercel.app/",
    github: "https://github.com/ThanhThai-Dev/IPhone-website",
  },
]

const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index 
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline number  */}
              <div className="">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              </div>
              <h1 className="text-[60px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} project
              </h1>
              {/* category project  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* description project  */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/* stack used  */}
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>

              {/* border underline */}
              <div className="border border-white/20"></div>
              {/* button  */}
              <div className="flex gap-4 items-center">
                {/* live button  */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      {/* content  */}
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github button  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      {/* content  */}
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>
            </div>
          </div>

          {/* slider  */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                      </div>

                      {/* image  */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              {/* slide button  */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
              justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"              
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work