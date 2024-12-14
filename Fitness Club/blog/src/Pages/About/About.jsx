import React from 'react';
import gif from './girl making exercise videos.mp4';

const About = () => {
  return (
    <section className="flex justify-center items-center pt-32 lg:pt-60 px-4">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 px-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold justify-center items-center text-gray-900 mb-10 lg:mb-14 text-center md:text-left animate-fadeInUp">
              About our Blog
            </h1>

            <p className="text-sm sm:text-lg text-gray-700 mb-4 lg:mb-8 text-justify">
              Fitness and health are crucial components of a vibrant and energetic life. 
              Regular physical activity helps improve cardiovascular health, strengthens muscles, and promotes flexibility. 
              Our health and fitness blog is your gateway to achieving these goals.
            </p>

            <p className="text-sm sm:text-lg text-gray-700 mb-4 lg:mb-8 text-justify">
              Our mission is to empower you with the knowledge and tools to achieve a healthier lifestyle. From easy-to-follow workouts to nutritional guides, we aim to provide actionable tips to enhance your well-being.
            </p>

            <blockquote className="italic text-sm sm:text-lg text-yellow-700 mb-6 text-center md:text-left">
              "The greatest wealth is health." – Virgil
            </blockquote>
          </div>

          {/* Video Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <video
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
              src={gif}
              alt="Fitness animation"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
