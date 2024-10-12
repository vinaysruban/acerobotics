import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";



function QuickNav() {
    const { scrollY } = useScroll()
    const [num, setnumber] = useState(0)

    return (
        <motion.div
            className="z-50 text-[4vw] text-white absolute left-0 top-0 rounded-full border-white border-[0.1vw] p-[7vw]"
            animate={{
                x: '-3vw',
                y: `-3vw`
            }}

            whileHover={{
                padding: 100,
            }}
        >
            <FaCaretDown className="" />
        </motion.div>
    )
}

export default QuickNav