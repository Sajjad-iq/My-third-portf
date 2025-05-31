import React from 'react'
import { H1 } from '../../Components/common/H1.styled'
import { HeadDescription } from '../../Components/common/HeadDescription.styled'
import { HomeWrapper } from './styled/HomeWrapper.styled'
import { SocialMediaLinks } from './components/socialMediaLinks'
import { ScrollDownAnimation } from './components/ScrollDownAnimation'

export const Home = () => {
  return (
    <HomeWrapper id='home'>

      <H1 className='animate-charcter'>HI I'M SAJJAD KADEMM</H1>

      <HeadDescription style={{ margin: "20px 0" }}>
        A Web Developer with a passion for creating Software that is both beautiful, functional and Secure.
      </HeadDescription>

      <ScrollDownAnimation />

      <SocialMediaLinks />
    </HomeWrapper>
  )
}
