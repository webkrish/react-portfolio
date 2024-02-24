import { useRef } from "react";
import "./portfolio.css"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
    {
        id: 1,
        title: "react-project",
        img: "./public/1.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptate inventore maiores similique, sapiente minima molestiae placeat odio. Repellat expedita sit possimus neque eius modi alias harum, nostrum perspiciatis fugit."
    },
    {
        id: 2,
        title: "html project",
        img: "./public/2.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptate inventore maiores similique, sapiente minima molestiae placeat odio. Repellat expedita sit possimus neque eius modi alias harum, nostrum perspiciatis fugit."
    },
    {
        id: 3,
        title: "scss tech",
        img: "./public/3.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptate inventore maiores similique, sapiente minima molestiae placeat odio. Repellat expedita sit possimus neque eius modi alias harum, nostrum perspiciatis fugit."
    },
    {
        id: 4,
        title: "vanilla js",
        img: "./public/4.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptate inventore maiores similique, sapiente minima molestiae placeat odio. Repellat expedita sit possimus neque eius modi alias harum, nostrum perspiciatis fugit."
    },

];
const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref ,
    // offset: ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                    <motion.div className="text-container" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"], })
    const scaleX = useSpring(scrollYProgress,
        {
            stiffness: 100,
            damping: 30,
        })
    return (
        <div className="porifolio" id="Portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {item.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio