import React from 'react'
import { MainWrapper } from '../../Components/common/MainWrapper.styled'
import { Row } from '../../Components/common/Row.styled'
import { Column } from '../../Components/common/Column.styled'
import { H3 } from './styled/H3.styled'
import { Description } from './styled/Description.styled'
import { SecondaryWrapper } from '../../Components/common/SecondaryWrapper.styled'
import { SocialMediaILinks } from './components/socialMediaILinks'
import { Colors } from '../../assets/Colors'

export const Footer = () => {
    return (
        <MainWrapper style={{ background: "black" }}>
            <SecondaryWrapper style={{ padding: "15px 15px 0px 15px" }}>

                <Row width='100%' padding='25px 0' align='space-between' style={{ flexDirection: window.innerWidth <= 480 ? 'column-reverse' : "row", alignItems: window.innerWidth <= 480 ? 'flex-start' : "center" }} >
                    <Column width={window.innerWidth <= 480 ? "100%" : "50%"} padding='10px 0' align='flex-start'>
                        <H3>SAJJAD KADEMM</H3>
                        <Description>
                            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        </Description>
                    </Column>

                    <Column width='fit-content' padding='10px 0' align='flex-start'>
                        <H3>SOCIAL</H3>
                        <SocialMediaILinks />
                    </Column>
                </Row>

                <Column width='100%' padding='25px' align='center' style={{ borderTop: `1px solid ${Colors.Primary.Lightgrey}` }}>
                    <p style={{ fontSize: "0.6rem" }}>© Copyright 2023. Made by  <strong>Sajjad Kademm</strong></p>
                </Column>
            </SecondaryWrapper>
        </MainWrapper>
    )
}
