"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import useAlert from "@/hooks/useAlert";
import Alert from "@/components/Alert";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '0933 292 798'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'thanhthaib2t2212@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Can Tho'
  },
]

const Contact = () => {

const form = useRef();
const { alert, showAlert, hideAlert } = useAlert();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    form.current,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  )
  .then((result) => {
    console.log(result);
    showAlert({
      show: true,
      text: 'Thank you for your message 😃',
      type: 'success',
    });

    setTimeout(() => {
      hideAlert(false);
    }, [3000]);
  }, (error) => {
    showAlert({
      show: true,
      text: "I didn't receive your message 😢",
      type: 'danger',
    });
    console.log(error.text);
  });
};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
      className="py-6"
    >
      {alert.show && <Alert {...alert} />}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* form personal  */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form id="contact-form" onSubmit={sendEmail} ref={form} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's make some website</h3>
              <p className="text-white/60">
              I'm excited to collaborate with you on creating an amazing website. Whether you need a personal portfolio, a business site, 
              or an e-commerce platform, I'm here to help bring your vision to life. 
              Please fill out the form below with your details and project requirements, and I'll get back to you as soon as possible.
              </p>

              {/* input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="firstname" placeholder="Firstname" />
                <Input type="lastname" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>

              {/* select  */}
              <Select name="position">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service...</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Android Development">Android Development</SelectItem>
                    <SelectItem value="Database Model Design">Database Model Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea  */}
              <Textarea 
                className="h-[200px]" 
                placeholder="Type your message here."
                name="message"
              />

              {/* button submit */}
              <Button size="md" type="submit" className="max-w-40">
                Send message
              </Button>
              {/* <button type="submit" className="max-w-40" size="md">
                Send message
              </button> */}
            </form>
          </div>

          {/* info  */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>


        </div>
      </div>

    </motion.div>
  )
}

export default Contact