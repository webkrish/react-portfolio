import React from 'react'
import { motion } from "framer-motion";

function ToggleButton({setOpen}) {
  return  <button onClick={()=> setOpen((prev) =>! prev)}>
    <svg width='23' height='23'viewBox='0 0 23 23'>
      <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' variants={{
        closed:{d:"M 2 5 L 20 5",
      opacity:1},
        open:{d:"M 3 16.5 L 17 2.5",
      opacity:1},
      }}/>
      <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' d="M 2 11.5 L 20 11.5" variants={{
        closed:{opacity:1},
        open:{opacity:0}
      }}/>
      <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' variants={{
        closed:{d:"M 2 18 L 20 18",
      opacity:1},
        open:{d:"M 3 2.5 L 17 16.5 ",
        opacity:1},
      }}/>
      </svg>
  </button>

}

export default ToggleButton