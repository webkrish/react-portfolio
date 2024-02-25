
import Sidebar from '../sidebar/Sidebar';
import './navbar.css'
import { motion } from "framer-motion";
function Navbar() {
    return (
        <div className='navbar'>
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='logo'>Portfolio</motion.span>
                <div className="social">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100005249479261"><img src='social-facebook.png' alt="" /></a>
                    <a target="_blank" href="https://www.instagram.com/krishnendutripathy/"><img src='social-instagram.png' alt="" /></a>
                    <a target="_blank" href="https://wa.link/4e1hzf"><img src='social-tik-tok.png' alt="" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/krishnendu-tripathy-641aa6226/"><img src='social-youtube.png' alt="" /></a>
                    <a target="_blank" href="https://github.com/webkrish"><img src='git-hub.png' alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar