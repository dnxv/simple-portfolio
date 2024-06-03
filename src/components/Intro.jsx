import React from "react";

function Intro() {
  return (
    <div className="flex items-center 
    justify-center flex-col text-center
    pt-20 pb-6">
      
      <h1 className="font-bold 
      text-4xl md:text-7xl 
      mb-1     md:mb-3">
        Dave.dev
      </h1>

      {/*  text-base: 1rem, line-height 1.5rem  */}
      <p className="text-base font-medium
      md:text-xl
      mb-3">
        Software Engineer, Robotics, AI/Machine Learning
      </p>

      {/*  max-w-xl: max-width-36rem  */}
      <p className="text-sm max-w-xl font-bold
      mb-6">
        Welcome to my portfolio! I'm a Master's student 
        studying Computer Science.
        Some of my projects include AI/machine learning, 
        computer vision, robotics, and web dev.
      </p>

    </div>
  )
}

export default Intro;