import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function TopNavbar() {
  return (
    <div
      className="p-2 hidden md:flex justify-between items-center mb-4"
      style={{ backgroundColor: "#F2F5F9" }}
      >
      <div className="flex items-center gap-4 justify-evenly">
        <div className="flex gap-1 items-center justify-evenly ml-24">
        <a
                  href="https://www.google.com/maps/place/MSP+Solution+Pvt.+Ltd./@27.6938217,85.3290367,15z/data=!4m6!3m5!1s0x39eb195daf226305:0x3ab09dd0441b9068!8m2!3d27.6938217!4d85.3290367!16s%2Fg%2F11rm_xw4r5?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center text-[#6C757D] "
                >
                  <IoLocationSharp className="mr-2 text-[#025DC9]" size={20} />
                  Anamnagar, Kathmandu
                </a>
          
        </div>
        <div
          className="border-l h-8"
          style={{ border: "1px solid #015EC9" }}
        ></div>
        <div>
          <div className="flex gap-1 items-center">
          <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZbjcSxSRvpWxVwDJcjhLWCFQzWZVTcmgTMHCPzbKtFRBxTlcJQgwvrndCQTLzgFqvhZVq"
                  target="blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center text-[#6C757D]"
                > 
                  <MdEmail className="mr-2 text-[#025DC9]" size={18} />
                  info@mspsolution.com.np
                </a>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly gap-[44px] mr-20">
        <a
          href="https://www.facebook.com/mspsolutions2078"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={20} style={{ color: "#015EC9" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/msp-solution-pvt-ltd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={20} style={{ color: "#015EC9" }} />
        </a>
        <a
          href="https://www.instagram.com/mspsolutions2078/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} style={{ color: "#015EC9" }} />
        </a>
      </div>
    </div>
  );
}

export default TopNavbar;
