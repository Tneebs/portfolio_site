import React from "react";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: '-100vh',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const secondVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1.5
    }
  },
  exit: {
    x: '-100vh',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const thirdVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 4.5,
      duration: 1.5
    }
  },
  exit: {
    x: '-100vh',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const Home = () => {
  return (
    <div className="home-container">

      <motion.div className='welcome-quote'
        variants={secondVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p className='quote-1'><em>"All problems in computer science can be solved by another level of indirection." <br/> - David Wheeler</em></p>
      </motion.div>

      <motion.div className='welcome-quote-2'
        variants={thirdVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p className='quote-2'><em>"But that usually will create another problem." <br/> - David Wheeler</em></p>
      </motion.div>

      <motion.div className='welcome-msg'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p className='welcome'>Welcome and thanks for stopping by! My name is Ted Neben and I am a Fullstack Software Engineer.</p>
      </motion.div>
      
    </div>
  );
};

export default Home;
