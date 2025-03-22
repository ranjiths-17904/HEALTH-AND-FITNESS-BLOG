import backgroundVideo from "./fitness2.mp4";
import { useEffect, useState } from 'react';
const HomePage = () => {

  const [name,SetName] = useState("Join my journey") 

  const handleName = (e) => {
    e.preventDefault();
    
  }


  return (
    <>
      <div className="relative h-screen flex">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Profile Section */}
        <div className="absolute flex top-6 left-4 md:top-12 md:left-10 bg-blue-950 p-2 md:p-4 rounded-full items-center space-x-3 md:space-x-4 shadow-lg">
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="profile"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white object-cover"
          />
          <div className="text-white">
            <h2 className="text-lg md:text-xl font-bold">Welcome!</h2>
            <p className="text-sm md:text-base">{name}</p>
          </div>
        </div>

        {/* Featured Post Section */}
        <div className="absolute flex flex-col mr-0 -bottom-36 right-0 md:-bottom-52 md:right-18 bg-opacity-90 bg-gray-950 p-4 md:p-8 rounded-lg shadow-xl h-72 md:h-96 w-full md:w-8/12">
          <h2 className="text-white text-lg font-bold mb-3 md:mb-4">Featured Post</h2>
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="featured post"
            className="w-full h-32 md:h-40 object-cover rounded"
          />
          <h3 className="text-white text-base md:text-lg font-semibold mt-3 md:mt-4">
            Top Hikes In Australia
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">October 05, 2024 · 2 min read</p>
          <p className="text-gray-300 text-xs md:text-sm mt-2">
            Create a blog post subtitle that summarizes your post in a few short,
            punchy sentences...
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
