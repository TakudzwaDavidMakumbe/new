import React from "react";
import Bg from "../assets/Landing.png";
import Navbar from "./Navbar";
import Text from "../assets/MainHeading.png";
import Ellipse from "../assets/Ellipse.png";
import Container from "../assets/Container.png";

const Hero = () => {
    return (
        <div
            className="w-full min-h-screen"
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div>
                <Navbar />
            </div>

            <div className="w-full h-full">
                <h1 className="text-[#213c88] font-bold text-center pt-10 md:pt-20 text-base md:text-lg lg:text-xl xl:text-2xl px-4">
                    TRUSTED BY OVER 500+ PRODUCTION TEAMS WORLDWIDE
                </h1>

                <div className="flex py-6 md:py-8 justify-center items-center">
                    <img
                        src={Text}
                        alt="Main Heading"
                        className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-[600px]"
                    />
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    <p className="text-center w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3 font-bold text-[#213c88] text-base md:text-lg px-2 md:px-4">
                        Say goodbye to chaos. From shoot schedules to post-production edits, we've got you covered.
                    </p>
                </div>

                {/* Container image before buttons on mobile, after on sm+ */}
                <div className="flex flex-col sm:hidden py-8 justify-center items-center">
                    <img
                        src={Container}
                        alt=""
                        className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-[900px]"
                    />
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center pt-8 gap-4">
                    <button className="bg-[#213c88] text-white px-8 md:px-10 py-3 rounded-full hover:bg-blue-600 transition duration-300 text-base md:text-lg">
                        Get Started
                    </button>

                    <div className="flex  rounded-full border border-gray-800/20 px-4 md:px-6 py-[13px] items-center space-x-2">
                        <img src={Ellipse} alt="" className="w-6 h-6" />
                        <label className="text-sm md:text-base">See a Trailer</label>
                    </div>
                </div>

                {/* Container image after buttons on sm+ */}
                <div className="w-full py-8 justify-center items-center hidden sm:flex">
                    <img
                        src={Container}
                        alt=""
                        className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-[900px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
