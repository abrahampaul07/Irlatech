import React, { useRef } from "react";
import Layout from "./Layout";
import { FaChevronDown } from "react-icons/fa";
import "../Styles/Services.css"; // Ensure this file has the CSS for .service-image

import box1Image from "../../assets/box7.png";
import box2Image from "../../assets/box2.jpeg";
import box3Image from "../../assets/box3.png";
import box4Image from "../../assets/box6.png";
import box5Image from "../../assets/box5.jpeg";
import Footer from "./Footer";

const servicesData = [
  {
    title: "Software Licensing Management",
    description:
      "Stay compliant and manage software licenses effectively, saving costs on unused or redundant licenses.",
    image: box1Image,
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Protect your business with top-notch cybersecurity measures, safeguarding sensitive data from threats.",
    image: box2Image,
  },
  {
    title: "Remote IT Support",
    description:
      "Get reliable 24/7 remote IT support to resolve issues quickly without the need for on-site visits.",
    image: box3Image,
  },
  {
    title: "Cloud Migration",
    description:
      "Seamlessly move your business to the cloud to improve flexibility and reduce infrastructure costs.",
    image: box4Image,
  },
  {
    title: "IT Infrastructure Optimization",
    description:
      "Maximize the efficiency of your existing IT assets by optimizing networks, hardware, and software.",
    image: box5Image,
  },
];

const Services = () => {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    if (servicesRef.current) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const scrollOptions = {
        top: servicesRef.current.offsetTop - navbarHeight,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="text-center mb-10">
            <h1 className="text-[40px] font-bold text-white">Services</h1>
            <span className="block h-1 w-20 bg-emerald-800 mx-auto mt-2" />
            <p className="mt-4 text-2xl font-bold text-white">
              Reduce IT Costs with Our Tailored Services
            </p>
            <p className="mt-5 xl:text-lg text-white w-[90%] mx-auto italic">
              Our suite of IT solutions is designed to help businesses cut down
              on operational costs while maximizing efficiency and security.
              Explore our services that streamline your IT infrastructure,
              enhance security, and reduce overhead.
            </p>
          </div>

          <button onClick={scrollToServices} className="absolute bottom-0">
            <FaChevronDown className="text-2xl text-emerald-800 animate-bounce" />
          </button>
        </div>

        <div
          ref={servicesRef}
          className="flex flex-col items-center p-4 scrollable"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 w-full max-w-5xl mb-8">
            {servicesData.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="shadow-md p-4 flex flex-col h-full"
                style={{ backgroundColor: "rgba(38, 38, 38, 0.4)" }}
              >
                <div className="flex flex-col flex-1 items-center justify-center text-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image mb-4"
                  />
                  <h2 className="text-lg font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-300">
                    {service.description}
                  </p>
                  <button className="learn-more-button mt-4 bg-[#5d6763] text-white py-2 px-4 rounded-md text-sm">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:w-[55%] md:w-[65%] w-full max-w-5xl">
            {servicesData.slice(3).map((service, index) => (
              <div
                key={index + 3}
                className="shadow-md p-4 flex flex-col h-full"
                style={{ backgroundColor: "rgba(38, 38, 38, 0.3)" }}
              >
                <div className="flex flex-col flex-1 items-center justify-center text-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image mb-4"
                  />
                  <h2 className="text-lg font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-300">
                    {service.description}
                  </p>
                  <button className="learn-more-button mt-4 bg-[#5d6763] text-white py-2 px-4 rounded-md text-sm">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Services;
