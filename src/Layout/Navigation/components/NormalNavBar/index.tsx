import React from 'react'
import { Row } from '../../../../Components/common/Row.styled'
import { NavButton } from '../../../../Components/shared/NavButton'

export const NormalNavBar = () => {
    return (
        <Row width='fit-content' padding='0' align='center' style={{ display: window.innerWidth > 720 ? "flex" : "none" }}>
            <NavButton To="#home" Name='HOME' />
            <NavButton To="#about" Name='ABOUT' />
            <NavButton To="#projects" Name='PROJECTS' />
            <NavButton To="#contact" Name='CONTACT' />
        </Row>
    )
}
