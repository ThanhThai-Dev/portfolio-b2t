"use client";
import Link from "next/link";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/ThanhThai-Dev"},
    // {icon: <FaLinkedin />, path: ""},
    {icon: <FaInstagramSquare />, path: "https://www.instagram.com/thanhthaizero/"},
    // {icon: <FaTwitter />, path: ""},

]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
            return <Link 
                className={iconStyles} 
                key={index}
                href={social.path}

            >
                {social.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials