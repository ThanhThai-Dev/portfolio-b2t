import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import {motion} from "framer-motion";
import Stats from "@/components/Stats";
import Link from "next/link";
import ButtonDownload from "@/components/ButtonDownload";


export default function Home() {

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl mb-6">Front-End Developer</span>
                <h1 className="h1">
                  Hello there I'm <br /><span className="text-accent">Thanh Thái</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80">
                Passionate FrontEnd Developer with over 1 year of experience and 6 months of practical work in the field. 
                Eager to collaborate on building websites and mobile applications based on ReactJS and React Native.
                </p>

                {/* btn and social  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload }
              >
                  <span>Download my CV</span>
                  <FiDownload className="text-xl"/>
              </Button> */}
              <ButtonDownload />
              {/* socials  */}
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                  items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all
                  duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
