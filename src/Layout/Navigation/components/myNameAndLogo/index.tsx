import React from 'react'
import { Row } from '../../../../Components/common/Row.styled'
import { MyName } from '../../styled/myName.styled'
import { MyLogo } from '../../styled/myLogo.styled'
import Logo from "../../../../assets/Icons/img/logo.png"
export const MyNameAndLogo = () => {
    return (
        <Row width='fit-content' padding='0px' align='spae-between'>
            <MyLogo src={Logo} alt='logo' />
            <MyName  >SAJJAD KADEMM</MyName>
        </Row>
    )
}
