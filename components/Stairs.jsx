"use client";

import { animate, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {

    const pathname = usePathname();

  return (
    <>
        {[...Array(6)].map((_, index) => {
            return (<motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration : 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1
                }}
                className={`h-full w-full relative 
                    ${pathname === "/" && "bg-white"}
                    ${pathname === "/services" && "bg-white"}
                    ${pathname === "/resume" && "bg-white/90"}
                    ${pathname === "/work" && "bg-white/80"}
                    ${pathname === "/contact" && "bg-white/70"}
                    `}

                // className="h-full w-full bg-white relative"
            />)
        })}
    </>
  )
}

export default Stairs