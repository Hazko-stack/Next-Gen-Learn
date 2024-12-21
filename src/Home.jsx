import { Link } from "react-router-dom"; // Import Link for navigation
import BookImage from './assets/Book.png';
import BackgroundPNG from "./assets/wave.jpg"; 
import Pencil from './assets/Pencil.png';  // Tambahkan gambar Pencil
import MiniBook from './assets/Minibook.png';  // Tambahkan gambar MiniBook
import Scissors from './assets/Scissors.png'; // Tambahkan gambar Scissors

const Home = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${BackgroundPNG})`, // Set PNG as background
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo and Sign-in Button Outside of Navbar */}
      <div className="w-full sm:w-auto flex justify-between items-center px-6 py-4 absolute top-0 left-0 right-0 z-20">
        {/* Logo */}
        <div className="text-white font-bold text-xl sm:text-2xl flex items-center space-x-2">
          <span className="text-yellow-300">NEXT</span>
          <span className="text-">GEN</span>
          <span>LEARN</span>
        </div>

        {/* Sign-in Button */}
        <Link to="/login">
          <button className="bg-yellow-300 font-bold text-blue-900 px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
            SIGN-IN →
          </button>
        </Link>
      </div>

      {/* Navbar */}
      <header className="mt-20 sm:mt-20 flex flex-wrap justify-between items-center px-6 py-4 bg-white/20 backdrop-blur-lg rounded-full shadow-lg mx-4 sm:flex-row">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-base sm:text-lg text-white">
          <Link
            to="/"
            className="mt-1 hover:text-yellow-300 font-bold hover:underline transition duration-300"
          >
            HOME
          </Link>
          <Link
            to="/Progress"
            className="mt-1 hover:text-yellow-300 font-bold hover:underline transition duration-300"
          >
            PROGRESS
          </Link>
          <Link
            to="/Lesson"
            className="mt-1 hover:text-yellow-300 font-bold hover:underline transition duration-300"
          >
            LESSONS
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mt-6 lg:mt-0 px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section (Left) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:pl-8 relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-yellow-300 leading-tight" style={{ textShadow: '6px 6px 12px rgba(0, 0, 0, 0.7)' }}>
          <span className="block">I'M LEARNING WITH</span>
          <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ textShadow: '6px 6px 12px rgba(0, 0, 0, 0.7)' }}>
            NEXT GEN LEARN
          </span>
        </h1>




          {/* Button Section */}
          <Link 
            to="/lesson" 
            className="mt-4 bg-orange-600 px-6 py-3 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:scale-105 transition-transform inline-block">
            <span className="text-white">START STUDYING</span>
            <span className="text-blue-900 font-bold ml-2">→</span>
          </Link>


          {/* Gambar Pencil */}
          <img 
            src={Pencil} 
            alt="Pencil" 
            className="absolute bottom-0 left-0 w-20 opacity-80 z-0 mt-12 hidden lg:block"
          />

          {/* Gambar Scissors */}
          <img 
            src={Scissors} 
            alt="Scissors" 
            className="absolute bottom-130 left-4 w-24 opacity-80 z-0 hidden lg:block"
          />
        </div>

        {/* Book Image Section (Right) */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center relative">
          {/* Book Image with floating animation */}
          <img
            src={BookImage}
            alt="Open Book"
            className="w-3/4 max-w-full h-auto z-10 animate-float"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
