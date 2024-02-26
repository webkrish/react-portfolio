import "./about.css"
import { motion } from "framer-motion";

const myVarients = {
    initial: {
        x: +500,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: .5,
            staggerChildren: .3
        }
    },
}
const slidingbox = {
    initial: {
        y: +600,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: .8,
        }
    },
}
const textVarients = {
    initial: {
        y: +500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5,
            staggerChildren: .3
        }
    },
}

function About() {
    return (
        <div className='about'>
            <motion.div className="wrapper" variants={myVarients} initial="initial" whileInView="animate">
                <motion.div className="imageContent" variants={myVarients}  >
                    <img src="about2.jpg" alt="" />
                </motion.div>
                <motion.div className="textContent" variants={myVarients} >
                    <motion.h1 variants={textVarients}>About <span>Me</span></motion.h1><br />
                    <motion.p variants={textVarients}>
                        Hello There! <br />
                        I'm a developer, and very passionate and dedicated to my work. I'm from West Bengal, I have acquired and the knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration. I ensure that the entire website is responsive and displays well across different devices. I believe this is just the beginning, and there are many more exciting things to explore in the world of web development.
                    </motion.p> <br /><br />
                    <a href="#Contact">Contact Me</a>
                </motion.div>
                <motion.div className="box" variants={slidingbox}>

                </motion.div>
            </motion.div>

        </div>
    )
}

export default About