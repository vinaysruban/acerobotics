import { motion } from "framer-motion"
import { FaCaretDown } from "react-icons/fa";



function QuickNav() {

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