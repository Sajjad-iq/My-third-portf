import { NavButton } from '../../../../Components/shared/NavButton'
import { Box } from '../../styled/box.styled'
import { motion } from "framer-motion"
import './style.css'

interface Props {
    isActive: boolean
    setIsActive: any
}

export const MobileNavBar = (props: Props) => {


    return (
        <motion.div className='mobile-nav'
            animate={{ opacity: props.isActive ? 1 : 0, bottom: props.isActive ? "-277px" : "1000px" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => props.setIsActive(false)}>
                <NavButton To="#home" Name='HOME' />
            </Box>
            <Box onClick={() => props.setIsActive(false)}>
                <NavButton To="#about" Name='ABOUT' />
            </Box>
            <Box onClick={() => props.setIsActive(false)}>
                <NavButton To="#projects" Name='PROJECTS' />
            </Box>
            <Box onClick={() => props.setIsActive(false)}>
                <NavButton To="#contact" Name='CONTACT' />
            </Box>

        </motion.div>
    )
}

