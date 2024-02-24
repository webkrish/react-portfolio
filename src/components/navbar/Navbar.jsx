
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
                    <a href="#"><img src='react-portfolio\public\social-facebook.png' alt="" /></a>
                    <a href="#"><img src='react-portfolio\public\social-instagram.png' alt="" /></a>
                    <a href="#"><img src='react-portfolio\public\social-tik-tok.png' alt="" /></a>
                    <a href="#"><img src='react-portfolio\public\social-youtube.png' alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar