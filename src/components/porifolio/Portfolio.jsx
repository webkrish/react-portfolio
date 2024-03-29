import { useRef } from "react";
import "./portfolio.css"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
    {
        id: 1,
        title: "SCANZU",
        img:  "1.png",
        link:"https://webkrish.github.io/scanzu/",
        desc: "Introducing Scanzu, a groundbreaking project developed by me for my company Dignitech. Leveraging HTML, CSS, Bootstrap, and JavaScript, I spearheaded the end-to-end creation of Scanzu for our company. This innovative solution seamlessly digitizes documents, enhancing workflow efficiency and productivity."
    },
    {
        id: 2,
        title: "ALI TOUR",
        img: "2.png",
        link:"https://webkrish.github.io/Ali-tour/",
        desc: "Introducing Ali-Tour, a dynamic project developed by me for my company Dignitech. Harnessing the power of HTML, CSS, Bootstrap, JavaScript, and Chart.js, Ali-Tour offers an immersive tour management solution. From itinerary planning to real-time analytics, elevate your travel experiences with Ali-Tour, meticulously crafted by our team for Dignitech."
    },
    {
        id: 3,
        title: "GCSRM",
        img: "3.png",
        link:"https://webkrish.github.io/GCSRM/",
        desc: "Introducing GCSRM, a bespoke project meticulously crafted by Dignitech. Leveraging HTML, CSS, Bootstrap, and basic JS, GCSRM empowers businesses with comprehensive Customer Relationship Management. Seamlessly manage interactions, streamline workflows, and enhance customer satisfaction with GCSRM's intuitive interface and robust functionality."
    },
    {
        id: 4,
        title: "LMS",
        img: "4.png",
        link:"https://webkrish.github.io/my-lms/",
        desc: "Introducing our latest LMS (Learning Management System) project, crafted with pure HTML, CSS, and basic JS. This intuitive platform empowers educators and learners alike with seamless navigation, interactive features, and a user-friendly interface. Revolutionize online learning with our bespoke LMS solution."
    },
    {
        id: 5,
        title: "bemarketing",
        img: "5.png",
        link:"https://webkrish.github.io/react-project/",
        desc: "Introducing ReactifyMe, a dynamic marketing project crafted by yours truly. Leveraging the power of React, this platform delivers unparalleled interactivity and responsiveness. Seamlessly blending stunning design with intuitive functionality, ReactifyMe elevates brand engagement to new heights."
    },
    {
        id: 6,
        title: "SEOS",
        img: "6.png",
        link:"https://webkrish.github.io/seos/",
        desc: "Presenting my latest SEO project for my portfolio, crafted with HTML, CSS, and GreenSock Animation Platform (GSAP). This dynamic website boasts smooth scrolling functionality, enhancing user experience while showcasing my SEO expertise. Explore the future of digital marketing with this innovative project."
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
                        <button><a href={item.link} target="_blank">See Demo</a></button>
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