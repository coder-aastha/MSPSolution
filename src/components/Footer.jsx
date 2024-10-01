import companyLogo from "../assets/companyLogo.png";
import { Link as ScrollLink } from 'react-scroll';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaAngleRight,
  FaInstagram,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#16243D] text-white flex flex-col lg:flex-row justify-around flex-wrap p-6 lg:p-12 gap-12 lg:gap-8 w-full">
      {/* Company Info Section */}
      <div className="flex flex-col items-center md:items-center lg:items-start gap-6 mt-6">
        <div className="flex gap-4 items-center justify-center">
          <img
            className="bg-white w-12 h-12 rounded-full"
            src={companyLogo}
            alt="Company Logo"
          />
          <h1 className="text-2xl font-bold">MSP Solution</h1>
        </div>
        <div className="flex flex-col gap-3 text-sm lg:text-base text-center lg:text-left">
          <p>Dolor amet sit justo amet elitr clita ipsum elitr</p>
          <p>est. Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipiscing...</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-blue-400 mt-2">
            Follow us on:
          </h1>
          <div className="flex gap-3 justify-center lg:justify-start">
            {/* Social Media Icons */}
            <div className="group w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#015EC9] transition-all">
              <FaFacebookF className="text-[#015EC9] group-hover:text-white" />
            </div>
            <div className="group w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#015EC9] transition-all">
              <FaInstagram className="text-[#015EC9] group-hover:text-white" />
            </div>
            <div className="group w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#015EC9] transition-all">
              <FaLinkedinIn className="text-[#015EC9] group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Useful Links Section */}
      <div className="flex flex-col items-center md:items-center lg:items-start gap-7 mt-6">
        <h1 className="text-2xl font-bold">Quick Links</h1>
        <div className="text-[#787878] flex flex-col gap-2 text-sm lg:text-base">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Career", path: "/pages/career" },
            { name: "FAQs", path: "/pages/faqs" },
            { name: "Blogs", path: "/pages/blog" },
            { name: "Contact", path: "/contact" },
          ].map((link, index) => (
            <NavLink
              to={link.path}
              className="flex items-center justify-center lg:justify-start"
              key={index}
            >
              <FaAngleRight className="mr-2" /> {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Solutions Section */}
      <div className="flex flex-col items-center md:items-center lg:items-start gap-7 mt-6">
        <h1 className="text-2xl font-bold">Our Solutions</h1>
        <div className="text-[#787878] flex flex-col gap-2 text-sm lg:text-base">
          {[
            { name: "Cloud Services", path: "/services/cloud-services" },
            { name: "Digital Marketing", path: "/services/digital-marketing" },
            { name: "Ecommerce Development", path: "/services/ecommerce-development" },
            { name: "Email Services", path: "/services/email-services" },
            { name: "Networking Services", path: "/services/network-services" },
            { name: "Software Development", path: "/services/software-development" },
          ].map((link, index) => (
            <NavLink
              to={link.path}
              className="flex items-center justify-center lg:justify-start"
              key={index}
            >
              <FaAngleRight className="mr-2" /> {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col items-center md:items-center lg:items-start gap-7 mt-6">
        <h1 className="text-2xl font-bold">Contact Information</h1>
        <div className="flex flex-col gap-2 text-sm lg:text-base">
          {[
            {
              text: (
                <a
                  href="https://www.google.com/maps/place/MSP+Solution+Pvt.+Ltd./@27.6938217,85.3290367,15z/data=!4m6!3m5!1s0x39eb195daf226305:0x3ab09dd0441b9068!8m2!3d27.6938217!4d85.3290367!16s%2Fg%2F11rm_xw4r5?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center "
                >
                  <IoLocationSharp className="mr-2 text-[#025DC9]" size={20} />
                  Anamnagar, Kathmandu
                </a>
              ),
              icon: null,
            },
            {
              text: (
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjcSxSRvpWxVwDJcjhLWCFQzWZVTcmgTMHCPzbKtFRBxTlcJQgwvrndCQTLzgFqvhZVq"
                  target="blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center "
                > 
                  <MdEmail className="mr-2 text-[#025DC9]" size={18} />
                  info@mspsolution.com.np
                </a>
              ),
              icon: null,
            },
            {
              text: "9861848861/ 9867143463/ 9865837534",
              icon: <FiPhoneCall className="text-[#025DC9]" size={18} />,
            },
          ].map((item, index) => (
            <div
              className="flex items-center justify-center lg:justify-start"
              key={index}
            >
              {item.icon && <div className="mr-2">{item.icon}</div>}
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Line and Copyright Section */}
      <div className="w-full">
        <hr className="w-full bg-white h-0.5 mt-6" />
        <h1 className="text-lg text-left mt-4">
          &copy; 2023 MSP Solution Pvt. Ltd. All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;