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
        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
      </HeadDescription>

      <ScrollDownAnimation />

      <SocialMediaLinks />
    </HomeWrapper>
  )
}
