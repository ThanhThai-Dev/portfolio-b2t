"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 22,
    text: "Projects Completed",
  },
  {
    num: 9,
    text: "Code commits",
  },
  {
    num: 1,
    text: "Year of work reality",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[100vw] h-full mx-auto">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 xl:max-w-[22vw] h-full items-center justify-start xl:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-2xl xl:text-4xl font-extrabold absolute max-w-[10vw]"
                />
                {/* circle */}
                <motion.svg
                  className="w-[18vw] xl:w-[10vw] h-[18vh] xl:h-[10vh]"
                  fill="transparent"
                  viewBox="60 60 1000 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    cx="300"
                    cy="100"
                    r="480"
                    stroke="#00ff99"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: "24 10 12 0",
                    }}
                    animate={{
                      strokeDasharray: [
                        "15 120 25 25",
                        "16 25 92 72",
                        "4 250 22 22",
                      ],
                      rotate: [120, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </motion.svg>

                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[10vw]" : "max-w-[20vw]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
