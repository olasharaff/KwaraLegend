import React, { useContext } from "react";
import myContext from "../context/data/myContext";
import logo from '../assets/logo.png'
import { GiEagleHead } from "react-icons/gi";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#30336b" }}
    >
      {/* Hero Section  */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* Main Content  */}
        <main>
          <div className="text-center">
            <div className="mb-2">
              {/* Image  */}
              <div className="flex justify-center">
                <GiEagleHead color="green" size={100} />
              </div>

              {/* Text  */}
              <h1 className="whitespace-nowrap font-extrabold lg:text-5xl text-white">
                <span>
                  Kw<span className="text-green-700">ar</span>a
                </span>
                <span>
                  Le<span className="text-green-700">gen</span>d
                </span>
              </h1>
            </div>

            {/* Paragraph  */}
            <p
              style={{ color: mode === "dark" ? "white" : "white" }}
              className="sm:text-3xl text-xl font-extralight sm:mx-auto "
            >
              Here are some blogs 
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HeroSection;
