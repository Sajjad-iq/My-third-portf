import { NavButton } from '../../../../Components/shared/NavButton'
import { Box } from '../../styled/box.styled'
import { motion } from "framer-motion"
import './style.css'
import { useLocation } from 'react-router-dom'

interface Props {
    isActive: boolean
    setIsActive: any
}

export const MobileNavBar = (props: Props) => {
    const Location = useLocation()
    const IsHomePage = Location.pathname === "/" ? true : false

    return (
        <motion.div className='mobile-nav'
            animate={{ opacity: props.isActive ? 1 : 0, bottom: props.isActive ? "-277px" : "1000px" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => props.setIsActive(false)}>
                <NavButton To={IsHomePage ? "#home" : "/"} Name='HOME' />
            </Box>
            <Box onClick={() => props.setIsActive(false)}>
                <NavButton To={IsHomePage ? "#about" : "/"} Name='ABOUT' />
            </Box>
            <Box onClick={() => props.setIsActive(false)}>
                <NavButton To={IsHomePage ? "#projects" : "/"} Name='PROJECTS' />
            </Box>
            <Box onClick={() => props.setIsActive(false)}>
                <NavButton To={IsHomePage ? "#contact" : "/"} Name='CONTACT' />
            </Box>

        </motion.div>
    )
}

