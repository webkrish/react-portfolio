import "./services.css"
import { motion } from "framer-motion";

const varients = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: .5
        }
    },
}


function Services() {
  return (
    <motion.div className="services" variants={varients} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={varients} >
            <p>
                I focus on helping your brand grow <br />
                and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={varients} >
            <div className="title">
                <img src=".\react-portfolio\public\people.jpg" alt="" />
                <motion.h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</motion.h1>
            </div>
            <div className="title">
                <motion.h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</motion.h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={varients} >
            <motion.div className="box" whileHover={{background:"lightgrey",color:'black'}}>
                <h2>Figma to Website</h2>
                <p>I can convert a figma file to an actuall website using HTML5, CSS3 and with basic JavaScript which will be fully responsive. and below i have mentioned some work done by me.</p>
                <button><a href="#Contact">Contact Now</a></button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey",color:'black'}}>
                <h2>Bootstrap Website </h2>
                <p>I can develop a fully responsive website using Bootstrap. and below i have mentioned a work done by me in bootstrap and for more you can check my Github profile.</p>
                <button><a href="#Contact">Contact Now</a></button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey",color:'black'}}>
                <h2>Flex Website </h2>
                <p>I can create a actuall website using HTML5, CSS3 (Flex-box) and with basic React which will be fully responsive. and below i have mentioned some work done by me. </p>
                <button><a href="#Contact">Contact Now</a></button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey",color:'black'}}>
                <h2>Email & PDF Template</h2>
                <p>I specialize in creating various email templates and GitHub and PDF templates. With my skills, I can efficiently design and customize multiple templates to suit your needs. </p>
                <button><a href="#Contact">Contact Now</a></button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services