import "./tech.css"
import { motion } from "framer-motion";

const slidetext = {
    initial: {
        x: +500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5,
            staggerChildren: .3
        }
    },
}

const techs = [
    {
        id: 1,
        img: 'html5.png',
        heading: 'HTML',
        disc: 'HyperText Markup Language (HTML) is used to create the structure of a website.'
    },
    {
        id: 2,
        img: 'css3.png',
        heading: 'CSS',
        disc: 'Cascading Style Sheets (CSS) is used to style elements on a website.'
    },
    {
        id: 3,
        img: 'bootstrap-5-logo-icon.png',
        heading: 'BOOTSTRAP',
        disc: 'A CSS library makes work easier by using classes for styling elements.'
    },
    {
        id: 4,
        img: 'sass.png',
        heading: 'SASS',
        disc: 'A preprocessor is used to write CSS more quickly and easily, and it also helps improve performance.'
    },
    {
        id: 5,
        img: 'js.png',
        heading: 'JS',
        disc: 'JavaScript is used for adding logic to websites and handling dynamic data through APIs.'
    },
    {
        id: 6,
        img: 'react-logo.png',
        heading: 'REACT',
        disc: 'Still in the learning phase :)'
    },
]

function Tech() {
    return (
        <motion.div className="tech" initial="initial" whileInView="animate">
            <motion.h1 variants={slidetext}>TECHNOLOGIES I AM <span>FAMILIER WITH</span></motion.h1>
            <div className="three-sec">
                {techs.map(techs => (
                        <div className="card" key={techs.id}>
                            <img src={techs.img} alt="" />
                            <h2>{techs.heading}</h2>
                            <p>{techs.disc}</p>
                        </div>
                    ))}
            </div>
        </motion.div>
    )
}

export default Tech