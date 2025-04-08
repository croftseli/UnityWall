import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center">
      <LinkedInIcon />
    </div>
  );
};

const LinkedInIcon = () => {
  return (
    <div 
      className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative overflow-hidden border-2 border-white z-10 group"
    >
      <div 
        className="absolute inset-x-0 top-full w-full h-full transition-all duration-500 ease-in-out group-hover:top-0"
        style={{ backgroundColor: "#0077b5" }}
      ></div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512" 
        className="w-5 h-5 fill-current text-gray-800 relative z-20 transition-all duration-500 ease-in-out transform group-hover:text-white group-hover:rotate-y-360"
        style={{
          transition: "color 0.5s, transform 0.5s"
        }}
      >
        {/* LinkedIn icon from Font Awesome */}
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    </div>
  );
};

export default SocialMediaIcons;