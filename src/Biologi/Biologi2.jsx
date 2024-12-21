import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundPNG from "../assets/wave.jpg";
import BookImage from "../assets/Booklesson.png";

const Biologi2 = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Data submateri dengan subtopik
  const submateriData = {
    Mikrobiologi: ["Sel dan Jaringan", "Ekosistem", "Genetika", "Evolusi"],
    "Biologi Sel dan Jaringan": [
      "Fisiologi Manusia",
      "Bioteknologi",
      "Biologi Molekuler",
      "Genetika Populasi",
    ],
    "Anatomi dan Fisiologi": ["Ekologi", "Imunologi", "Mikrobiologi", "Toksikologi"],
  };

  // Mapping submateri ke rute
  const submateriRouteMap = {
    Mikrobiologi: "/mikrobiologi",
    "Biologi Sel dan Jaringan": "/biologiseldanjaringan",
    "Anatomi dan Fisiologi": "/anatomidanfisiologi",
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter submateri berdasarkan pencarian
  const filteredData = Object.keys(submateriData).reduce((acc, submateri) => {
    const filteredSubmateri = submateriData[submateri].filter((subtopik) =>
      subtopik.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSubmateri.length > 0) {
      acc[submateri] = filteredSubmateri;
    }
    return acc;
  }, {});

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
      <div className="container mx-auto px-6 py-12">
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)" }}
        >
          Biologi 2
        </h1>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 border rounded-lg"
            placeholder="Search for a Submateri..."
          />
        </div>

        {/* Display Kotak Biologi dengan List Subtopik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(filteredData).map(([submateri, subtopiks]) => (
            <div
              key={submateri}
              className="p-6 bg-gray-800/70 rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
            >
              <img
                src={BookImage}
                alt="Book Icon"
                className="mx-auto mb-4 h-24 w-24 object-contain"
              />
              <h2 className="text-2xl font-bold text-center mb-4">{submateri}</h2>
              <ul className="list-disc list-inside">
                {subtopiks.map((subtopik, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-200 hover:text-blue-600 cursor-pointer"
                  >
                    {subtopik}
                  </li>
                ))}
              </ul>
              {/* Add Next Button */}
              <div className="mt-4 text-center">
                <Link
                  to={submateriRouteMap[submateri]} // Gunakan mapping untuk menentukan rute
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all"
                >
                  Next
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* If no Submateri match the search query */}
        {searchQuery && Object.keys(filteredData).length === 0 && (
          <p className="text-center text-xl text-red-500">No Submateri found</p>
        )}
      </div>
    </div>
  );
};

export default Biologi2;
