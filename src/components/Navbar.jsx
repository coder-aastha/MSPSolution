import { useState, useRef, useEffect } from "react";
import companyLogo from "../assets/companyLogo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Button from "./button";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null); // Ref for services dropdown

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handlePagesDropdownToggle = (event) => {
    event.stopPropagation(); // Prevent event from propagating
    setIsDropdownOpen((prev) => !prev);
    setIsServicesDropdownOpen(false);
  };

  const handleServicesDropdownToggle = (event) => {
    event.stopPropagation(); // Prevent event from propagating
    setIsServicesDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const handleDropdownItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    setIsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, servicesDropdownRef]);

  // Handle scroll event to toggle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 p-4 bg-white shadow-lg transition-all duration-300"
          : "relative p-4"
      }`}
    >
      <div className="flex items-center justify-between md:justify-around">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-24 h-20" src={companyLogo} alt="Company Logo" />
          <p className="font-bold text-2xl">MSP Solution</p>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden">
          <FaBars
            className="cursor-pointer text-3xl"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Navigation Links - Hidden on small screens, shown on medium and up */}
        <div className="hidden md:flex items-center justify-between gap-8 py-2 rounded-xl px-4 text-[#6C757D] bg-[#F2F5F9] flex-grow max-w-4xl">
          <div className="flex gap-6">
            <div className="cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="cursor-pointer">
              <NavLink to="/about">About</NavLink>
            </div>

            {/* Our Solutions Dropdown */}
            <div
              className="relative cursor-pointer"
              ref={servicesDropdownRef}
              onClick={handleServicesDropdownToggle}
            >
              <div className="flex items-center">
                Our Solutions
                <IoIosArrowDown className="ml-1" />
              </div>
              {/* Services Dropdown */}
              {isServicesDropdownOpen && (
                <div className="absolute mt-4 w-60 rounded-lg bg-[#F2F5F9] shadow-md z-10">
                  {[
                    {
                      name: "Cloud Services",
                      path: "/services/cloud-services",
                    },
                    {
                      name: "Digital Marketing",
                      path: "/services/digital-marketing",
                    },
                    {
                      name: "Ecommerce Development",
                      path: "/services/ecommerce-development",
                    },
                    {
                      name: "Email Services",
                      path: "/services/email-services",
                    },
                    {
                      name: "Network Services",
                      path: "/services/network-services",
                    },
                    {
                      name: "Software Development",
                      path: "/services/software-development",
                    },
                  ].map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className="block px-3 mb-2 cursor-pointer hover:bg-blue-600 hover:text-white"
                      onClick={() => handleDropdownItemClick(item.name)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center cursor-pointer"
                onClick={handlePagesDropdownToggle}
              >
                Pages
                <IoIosArrowDown className="ml-1" />
              </div>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute mt-4 w-40 rounded-lg bg-[#F2F5F9] shadow-md z-10">
                  {[
                    { name: "Our Teams", path: "/pages/our-teams" },
                    { name: "Career", path: "/pages/career" },
                    { name: "Blog", path: "/pages/blog" },
                    { name: "FAQs", path: "/pages/faqs" },
                  ].map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className="px-3 mb-2 block cursor-pointer hover:bg-blue-600 hover:text-white"
                      onClick={() => handleDropdownItemClick(item.name)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <div className="cursor-pointer">
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoSearchCircleSharp
              className="cursor-pointer text-[#015EC9] hover:text-black"
              size={40}
            />
            <Button title="Get a quote" />
          </div>
        </div>

        {/* Phone Section - Hidden below xl */}
        <div className="hidden xl:flex items-center gap-4">
          <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white shadow-md">
            <FaPhone className="text-[#015EC9]" size={20} />
          </div>
          <div>
            <div className="text-sm font-semibold">Call to Our Experts</div>
            <div className="text-[#6C757D] text-sm">Free: +0123 456 7890</div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Shown when menu icon is clicked */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center text-[#6C757D] gap-4">
          <NavLink to="/" className="cursor-pointer">
            Home
          </NavLink>
          <NavLink to="/about" className="cursor-pointer">
            About
          </NavLink>
          <div className="relative" ref={servicesDropdownRef}>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleServicesDropdownToggle}
            >
              Our Solutions
              <IoIosArrowDown className="ml-1" />
            </div>
            {/* Mobile Services Dropdown */}
            {isServicesDropdownOpen && (
              <div className="absolute mt-2 w-40 rounded-lg bg-white shadow-lg z-10">
                {[
                  { name: "Cloud Services", path: "/services/cloud-services" },
                  {
                    name: "Digital Marketing",
                    path: "/services/digital-marketing",
                  },
                  {
                    name: "Ecommerce Development",
                    path: "/services/ecommerce-development",
                  },
                  { name: "Email Services", path: "/services/email-services" },
                  {
                    name: "Network Services",
                    path: "/services/network-services",
                  },
                  {
                    name: "Software Development",
                    path: "/services/software-development",
                  },
                ].map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    onClick={() => handleDropdownItemClick(item.name)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center cursor-pointer"
              onClick={handlePagesDropdownToggle}
            >
              Pages
              <IoIosArrowDown className="ml-1" />
            </div>
            {/* Mobile Pages Dropdown */}
            {isDropdownOpen && (
              <div className="absolute mt-2 w-40 rounded-lg bg-white shadow-lg z-10">
                {[
                  { name: "Our Teams", path: "/pages/our-teams" },
                  { name: "Career", path: "/pages/career" },
                  { name: "Blog", path: "/pages/blog" },
                  { name: "FAQs", path: "/pages/faqs" },
                ].map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
                    onClick={() => handleDropdownItemClick(item.name)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/contact" className="cursor-pointer">
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;