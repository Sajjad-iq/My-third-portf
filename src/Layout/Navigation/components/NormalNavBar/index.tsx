import { Row } from '../../../../Components/common/Row.styled'
import { NavButton } from '../../../../Components/shared/NavButton'
import { useLocation } from 'react-router-dom'

export const NormalNavBar = () => {
    const Location = useLocation()
    const IsHomePage = Location.pathname === "/" ? true : false

    return (
        <Row width='fit-content' padding='0' align='center' style={{ display: window.innerWidth > 720 ? "flex" : "none" }}>
            <NavButton To={IsHomePage ? "#home" : "/"} Name='HOME' />
            <NavButton To={IsHomePage ? "#about" : "/"} Name='ABOUT' />
            <NavButton To={IsHomePage ? "#projects" : "/"} Name='PROJECTS' />
            <NavButton To={IsHomePage ? "#contact" : "/"} Name='CONTACT' />
        </Row>
    )
}
