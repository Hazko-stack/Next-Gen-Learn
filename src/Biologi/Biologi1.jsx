import React, { useState } from "react";
import BackgroundPNG from "../assets/wave.jpg";
import BookImage from "../assets/Booklesson.png";

const Biologi1 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Data PDF yang akan ditampilkan
  const pdfData = [
    {
      name: "Lingkungan PDF",
      previewLink: "https://drive.google.com/file/d/1_Et2Q0myzY5YEqB6evTMlrLo6Ak3bDYA/preview",
      downloadLink: "https://drive.google.com/uc?id=1_Et2Q0myzY5YEqB6evTMlrLo6Ak3bDYA&export=download",
    },
    // Tambahkan PDF lain di sini
  ];

  // Filter PDF berdasarkan pencarian
  const filteredPDFs = pdfData.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          Biologi Lingkungan
        </h1>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Search for a PDF..."
          />
        </div>

        {/* Display PDFs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPDFs.map((pdf, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/70 rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
            >
              <img
                src={BookImage}
                alt="Book Icon"
                className="mx-auto mb-4 h-24 w-24 object-contain"
              />
              <h2 className="text-xl font-bold text-center mb-4">{pdf.name}</h2>
              <div className="text-center space-x-2">
                <button
                  onClick={() => {
                    setIsLoading(true);
                    setSelectedPDF(pdf);
                  }}
                  className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-800 transition-all"
                >
                  Preview
                </button>
                <a
                  href={pdf.downloadLink}
                  className="px-6 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-600 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* If no PDFs match the search query */}
        {searchQuery && filteredPDFs.length === 0 && (
          <p className="text-center text-xl text-red-500">No PDFs found</p>
        )}

        {/* PDF Preview Modal */}
        {selectedPDF && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4 overflow-auto relative">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setSelectedPDF(null);
                  setIsLoading(false);
                }}
              >
                Close
              </button>

              {/* Loading Spinner */}
              {isLoading && (
                <div className="flex items-center justify-center h-full">
                  <span
                    className="loading loading-infinity loading-lg"
                    style={{ color: "#E73879" }} // Warna spinner (Tailwind green-500)
                  ></span>
                </div>
              )}

              {/* Google Drive PDF Preview */}
              <iframe
                src={selectedPDF.previewLink}
                className={`w-full h-full ${isLoading ? "hidden" : "block"}`}
                frameBorder="0"
                title="PDF Preview"
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Biologi1;
