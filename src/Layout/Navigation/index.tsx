import React, { useState } from 'react'
import { MyNameAndLogo } from './components/myNameAndLogo'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToggleButton } from '../../Components/shared/ToggleButton';
import { MobileNavBar } from './components/MobileNavBar';
import { NormalNavBar } from './components/NormalNavBar';
import { NavWrapper } from './styled/NavWrapper.styled';

export const Navigation = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <NavWrapper >
            <MyNameAndLogo />

            <NormalNavBar />

            <MobileNavBar setIsActive={setIsActive} isActive={isActive} />
            <ToggleButton UnActiveIcon={faBars} ActiveIcon={faXmark} isActive={isActive} onClick={() => setIsActive(!isActive)} />
        </NavWrapper>
    )
}
