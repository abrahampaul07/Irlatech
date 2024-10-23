// src/components/Home.jsx
import React, { useEffect, useRef } from "react";
import Layout from "./Layout";
import video from "../../assets/video.mp4";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Allow screen to turn off
        document.body.style.overflow = "auto";
      } else {
        // Disable scrolling again when the user returns
        document.body.style.overflow = "hidden";
      }
    };

    // Listen for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling on cleanup
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dimmer overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      <Layout>
        <div className="flex items-center justify-center h-screen"> 
          <div className="text-center text-white">
            <h1
              className="xl:text-[50px] text-[30px] font-bold relative z-20"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Optimize Your IT
            </h1>
            <span className="block h-1 w-20 bg-emerald-800 mx-auto mt-2 relative z-20" />
            <p
              className="mt-2 xl:text-2xl text-xl relative z-20 xl:block md:block hidden"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Transforming technology to{" "}
              <span className="font-bold text-emerald-800 xl:text-3xl">
                lower your expenses
              </span>{" "}
              today
            </p>

            <p
              className="mt-2 xl:text-2xl text-xl relative z-20 xl:hidden md:hidden block"
              style={{ fontFamily: "Poppins, sans-serif"}}
            >
              Transforming technology to{" "}
              <span className="font-bold text-emerald-800 xl:text-3xl">
                lower your expenses
              </span>{" "}
              today
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
