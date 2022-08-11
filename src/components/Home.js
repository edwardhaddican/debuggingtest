import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div className='ShowcaseHome'
        initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 1}}
        >
            <h2>THE ONLY SUMMER CLOTHING BRAND</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.</p>
        </motion.div>
    )
}

export default Home