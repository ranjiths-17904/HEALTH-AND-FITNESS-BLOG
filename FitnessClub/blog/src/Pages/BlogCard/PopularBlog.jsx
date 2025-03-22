import React from 'react';

const PopularBlogs = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-1 sm:px-2 lg:px-4">
        <h2 className="text-3xl font-bold px-6  text-black mb-14 pr-16">
          Popular Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300 relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-6 py-1 rounded-bl-lg">
              Popular
            </span>
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Powerful Body Fitness"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 hover:text-yellow-500 transition duration-300 cursor-pointer">
                <a href="/powerful-body-fitness">Powerful Body Fitness</a>
              </h3>
              <p className="text-gray-600 mb-4">Boost your strength with targeted body fitness routines.</p>
              <div className="flex justify-between items-center">
                <button className="flex items-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Like <span className="ml-1">120</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fitness Guys"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 hover:text-yellow-500 transition duration-300 cursor-pointer">
                <a href="/fitness-guys">Fitness Guys</a>
              </h3>
              <p className="text-gray-600 mb-4">Join a community of fitness enthusiasts to push your limits.</p>
              <div className="flex justify-between items-center">
                <button className="flex items-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Like <span className="ml-1">85</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
            <img
              src="https://plus.unsplash.com/premium_photo-1705609329420-851ab341f01f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Health Makes Wealth"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 hover:text-yellow-500 transition duration-300 cursor-pointer">
                <a href="/health-makes-wealth">Health Makes Wealth</a>
              </h3>
              <p className="text-gray-600 mb-4">Your health is your most important asset – take care of it!</p>
              <div className="flex justify-between items-center">
                <button className="flex items-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Like <span className="ml-1">102</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBlogs;
