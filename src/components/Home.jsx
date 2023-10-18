import React from 'react';
import HeroImage from"../assets/Ashwitha.jpg";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Front End Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I'm a Computer Science student at Vellore Institute of Technology, passionate about coding and using technology to solve real-world problems. Proficient in both Java and Python.
l've actively participated in extracurricular activities that have broadened my skills and knowledge. I'm a member of the Marketing Team at the Computer Society Of India (CSI) club, where I've learned marketing and communication skills. I also had the privilege of leading a writing team at the Kalki Personality Development Club, further enhancing my leadership and communication abilities.
I am highly motivated and known for my hardworking nature. I possess the ability to quickly grasp new ideas and concepts, allowing me to adapt to evolving technology trends effectively. I am a perpetual learner, always eager to expand my knowledge.
I am seeking for challenging and rewarding opportunities to apply my skills and grow as a Computer Science engineer.
                    </p>

                    <div>
                        <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-black-500' >
                            Portfolio <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> </span>
                        </Link>
                    </div>
                </div>

                <div >
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-2/4'/>
                </div>
            </div>
        </div>
    )
}

export default Home
