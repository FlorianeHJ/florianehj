import React from 'react';

import Image from '../assets/profil.jpg';

import { FaDribbble, FaGithub, FaYoutube } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

const Banner = () => {
  return <section id='home' className='section'>
    <div className="container mx-auto">
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]' >Floriane <span>HJ</span></h1>
        <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className=' text-whitemr-4'>
            I am a 
          </span>
          <TypeAnimation 
            sequence={[
            "Developer", 2000,
            "Manager", 2000,
            "Super-heroe", 2000,
          ]}
          speed={50}
          className='text-accent'
          wrapper={Infinity} />
          
        </div>
        <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse illum, repellendus odit explicabo temporibus fugiat rerum pariatur doloribus itaque eveniet? Quasi ex, sapiente recusandae tenetur iure provident eligendi qui blanditiis.</p>
        <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0' >
          <button className='btn btn-lg'>Contact me</button>
          <a href="#" className='text-gradient btn-link'>My portfolio</a>
        </div>
        <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaDribbble />
          </a>
        </div>
      </div>
      <div>
        <img className='w-[480] h-[500]'  src={Image} alt="" />
      </div>
    </div>
  </section>;
};

export default Banner;
