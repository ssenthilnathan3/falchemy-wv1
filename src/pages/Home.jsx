import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation
} from '../config/motion';
import CustomButton from '../components/CustomButton';
import state from '../store';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro &&
        <motion.div className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('top')}>
            <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='text-6xl font-extrabold text-white'>LET'S <br className='xl:block hidden' /> DO IT.</h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-white text-base'>
                Create your own shirt with our exclusive 3D Customisation tool. <strong>Unleash your imaginations</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                text="Customize It"
                handleClick ={() => state.intro = false}
                customStyles = "w-fit px-4 py-2.5 font-bold text-bold"
              />
            </motion.div>
          </motion.div>
        </motion.div>}
    </AnimatePresence>
  )
}

export default Home
