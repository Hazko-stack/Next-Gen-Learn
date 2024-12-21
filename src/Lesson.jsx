import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundPNG from "./assets/wave.jpg";
import BiologiImage from "./assets/Booklesson.png";
import FisikaImage from "./assets/Booklesson.png";
import MatematikaImage from "./assets/Booklesson.png";
import SejarahImage from "./assets/Booklesson.png";
import GeografiImage from "./assets/Booklesson.png";
import KimiaImage from "./assets/Booklesson.png";
import EkonomiImage from "./assets/Booklesson.png";


const subjectImages = {
  Biologi: BiologiImage,
  Fisika: FisikaImage,
  Matematika: MatematikaImage,
  Sejarah: SejarahImage,
  Geografi: GeografiImage,
  Kimia: KimiaImage,
  Ekonomi: EkonomiImage,
};

const Lesson = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen overflow-hidden font-sans text-white"
      style={{
        backgroundImage: `url(${BackgroundPNG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800/50 backdrop-blur-md z-50 px-6 py-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-xl flex items-center space-x-2">
            <span className="text-yellow-300">NEXT</span>
            <span>GEN</span>
            <span>LEARN</span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="sm:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } sm:flex absolute sm:static top-14 left-0 w-full sm:w-auto bg-gray-800/70 sm:bg-transparent sm:space-x-6 sm:items-center sm:text-center`}
          >
            <Link
              to="/"
              className="block sm:inline hover:text-yellow-300 font-bold py-2 sm:py-0 transition duration-300"
            >
              HOME
            </Link>
            <Link
              to="/progress"
              className="block sm:inline hover:text-yellow-300 font-bold py-2 sm:py-0 transition duration-300"
            >
              PROGRESS
            </Link>
            <Link
              to="/lesson"
              className="block sm:inline hover:text-yellow-300 font-bold py-2 sm:py-0 transition duration-300"
            >
              LESSONS
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 mt-16">
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)" }}
        >
          Lesson Materials
        </h1>

        {/* Mata Pelajaran Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {Object.keys(subjectImages).map((mapel) => (
            <Link
              key={mapel}
              to={`/${mapel}`}
              className="group cursor-pointer p-6 text-center bg-gray-800/70 rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
            >
              <img
                src={subjectImages[mapel]}
                alt={`${mapel} Book`}
                className="mx-auto mb-4 h-24 w-24 object-contain"
              />
              <h2 className="text-lg font-bold text-gray-200 group-hover:text-blue-600">
                {mapel}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
