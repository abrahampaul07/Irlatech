import React, { useEffect, useRef, useState } from "react";
import Layout from "./Layout";
import video from "../../assets/video.mp4";

const Home = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
    };

    // Listen for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleVideoLoad = () => {
    setIsLoading(false);
    videoRef.current.play(); // Ensure the video plays once loaded
  };

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white">Loading...</div>
        </div>
      )}

      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-0 ${isLoading ? "hidden" : "block"}`}
        loop
        muted
        autoPlay
        playsInline
        preload="metadata" // Changed to "metadata"
        onLoadedData={handleVideoLoad} // Load event handler
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-70 z-10" />

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
              style={{ fontFamily: "Poppins, sans-serif" }}
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
