import React from 'react'
import { HeadDescription } from '../../Components/common/HeadDescription.styled'
import { HomeWrapper } from '../Home/styled/HomeWrapper.styled'
import { H2 } from '../../Components/common/H2.styled'
import { Form } from './components/form'

export const Contact = () => {
    return (
        <HomeWrapper id='contact' style={{ padding: "70px 20px", height: "fit-content" }}>

            <H2 className='animate-charcter'> CONTACT</H2>

            <HeadDescription style={{ margin: "20px 0" }}>
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </HeadDescription>

            <Form />
        </HomeWrapper>
    )
}
