import React from 'react';

const Skill = () => {
  return (
    <section
      
      className="container mx-auto p-8 md:p-16 bg-black w-full"
      >
      
      <h1 className="text-center font-bold text-6xl text-indigo-500 mb-16">Skills</h1>

      
      <div className="grid md:grid-cols-2 gap-20 items-center  text-gray-700">
        
        <div>
        <h2 className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300 text-5xl text-center drop-shadow-md">
  Technology I Work With
</h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-7">
            The application of scientific knowledge for practical purposes, especially in industry.
            Advances in computer technology have transformed the industry and continue to provide
            innovative solutions. Engineering and applied sciences drive progress across various
            domains.
          </p>
        </div>

        
        <div>
          <div className="grid grid-cols-2 text-center text-2xl sm:text-3xl font-medium text-gray-700 gap-6">
           
            <div className="space-y-3">
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>Next.js</h2>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>React</h2>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>TypeScript</h2>
              </div>
            </div>

           
            <div className="space-y-3">
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>CSS</h2>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>HTML</h2>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 hover:text-white transition-all duration-300">
                <h2>Tailwind</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
