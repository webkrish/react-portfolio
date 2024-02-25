import "./hero.css"
import { motion } from "framer-motion";
const slidingVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-400%",
        transition: {
            repeat:Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },
}

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}
function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>KRISHNENDU TRIPATHY</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Front-end Web Developer
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button whileHover={{background:"white",color: "black"}} variants={textVariants}><a href="my-resume.pdf">Resume</a></motion.button>
                        <motion.button whileHover={{background:"white",color: "black"}} variants={textVariants}  ><a href="#Contact">Contact me</a></motion.button>
                    </motion.div>
                    
                    <motion.img className="scrollimg" variants={textVariants} animate="scrollButton" src="mouse-cursor.png" alt="" />
                </motion.div>
                <motion.div className="slidingText" variants={slidingVariants} initial="initial" animate="animate">
                    I Am a front-end Web Developer
                </motion.div>
                <motion.div className="imageContainer">
                    <motion.img className="bounce" src="me1.png" alt=""/>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
