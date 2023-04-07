import { H3 } from '../../common/H3.styled'
import { PrimaryButton } from '../../common/PrimaryButton.styled'
import { SecondaryDescription } from '../../common/SecondaryDescription.styled'
import { SecondaryWrapper } from '../../common/SecondaryWrapper.styled'
import Imag from "../../../assets/Icons/img/dopefolio.jpeg"
import { Image } from '../../common/Image.styled'
import { ImageWrapper } from '../../../Pages/Projects/styled/ImageWrapper.styled'
import { ContentWrapper } from '../../../Pages/Projects/styled/ContentWrapper.styled'
import { MouseEventHandler } from 'react'
import { ProjectWrapper } from './styled/ProjectWrapper.styled'

interface Props {
    Image: string
    ProjectName: string
    Description: string
    onClick: MouseEventHandler
}

export const ProjectCard = (props: Props) => {
    return (
        <ProjectWrapper >

            <ImageWrapper>
                <Image src={props.Image} alt="project image" />
            </ImageWrapper>

            <ContentWrapper >

                <H3 >{props.ProjectName}</H3>

                <SecondaryDescription style={{ textAlign: window.innerWidth >= 900 ? "start" : "center" }}>
                    {props.Description}
                </SecondaryDescription>

                <div className='btn-gradient-1'>
                    <PrimaryButton onClick={props.onClick} >
                        CASE STUDY
                    </PrimaryButton>
                </div>

            </ContentWrapper>

        </ProjectWrapper>

    )
}
