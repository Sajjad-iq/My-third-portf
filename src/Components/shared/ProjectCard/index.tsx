import { H3 } from '../../common/H3.styled'
import { PrimaryButton } from '../../common/PrimaryButton.styled'
import { SecondaryDescription } from '../../common/SecondaryDescription.styled'
import { SecondaryWrapper } from '../../common/SecondaryWrapper.styled'
import Imag from "../../../assets/Icons/img/dopefolio.jpeg"
import { Image } from '../../common/Image.styled'
import { ImageWrapper } from '../../../Pages/Projects/styled/ImageWrapper.styled'
import { ContentWrapper } from '../../../Pages/Projects/styled/ContentWrapper.styled'

export const ProjectCard = () => {
    return (
        <SecondaryWrapper style={{ flexDirection: window.innerWidth >= 900 ? "row" : "column", justifyContent: "space-between", width: "100%", padding: "0", marginBottom: "80px" }}>

            <ImageWrapper>
                <Image src={Imag} alt="project image" />
            </ImageWrapper>

            <ContentWrapper >

                <H3 >Google Plus</H3>

                <SecondaryDescription style={{ textAlign: window.innerWidth >= 900 ? "start" : "center" }}>
                    Google Plus is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
                </SecondaryDescription>

                <div className='btn-gradient-1'>
                    <PrimaryButton ForHomePage={false}>
                        CASE STUDY
                    </PrimaryButton>

                </div>

            </ContentWrapper>

        </SecondaryWrapper>

    )
}
