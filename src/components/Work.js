import React from 'react';

// import { motion } from 'framer-motion'; 

// import { fadeIn } from "../variants"

import Img1 from "../assets/portfolio-img1.png";
// import Img2 from "../assets/portfolio-img2.png"
// import Img3 from "../assets/portfolio-img3.png"

const Work = () => {
  return (
  <section id='work' className='section'>
    <div className="container mx-auto">
      <div>
        <div>
          {/* {text} */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My latest <br/ > Work</h2>
            <p className='max-w-sm mb-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tempora omnis vitae alias labore nam repudiandae assumenda modi facere aspernatur quae incidunt veniam, necessitatibus aut est velit ducimus aliquam sunt.</p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/* {image} */}
          <div>
            {/* {overlay} */}
            <div></div>
            {/* {images} */}
            <img src={Img1} alt="" />
            {/* {pretitle} */}
            <div>UI/UX Design</div>
            {/* {title} */}
            <div>
              <span>Project Title</span>
              </div>
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  </section>
  );
};

export default Work;
