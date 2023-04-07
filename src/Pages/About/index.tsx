import { Column } from '../../Components/common/Column.styled'
import { H2 } from '../../Components/common/H2.styled'
import { UnderTextLine } from '../../Components/common/UnderTextLine.styled'
import { HeadDescription } from '../../Components/common/HeadDescription.styled'
import { AboutMe } from './components/AboutMe'
import { MySkills } from './components/MySkills'
import { SecondaryWrapper } from '../../Components/common/SecondaryWrapper.styled'
import { MainWrapper } from '../../Components/common/MainWrapper.styled'
import { Colors } from '../../assets/Colors'

export const About = () => {
    return (
        <MainWrapper style={{ background: Colors.Secondary.whiteGray }}>

            <SecondaryWrapper id='about' >

                <Column width='100%' padding='30px 0' align='center'>
                    <H2 className='animate-charcter'> ABOUT ME</H2>
                    <UnderTextLine />

                    <HeadDescription >
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </HeadDescription>
                </Column>

                <Column width='100%' align='flex-start' padding='0' style={{ flexDirection: window.innerWidth <= 1023 ? "column" : "row", justifyContent: "space-between" }}>
                    <AboutMe />
                    <MySkills />
                </Column>

            </SecondaryWrapper>
        </MainWrapper>

    )
}
