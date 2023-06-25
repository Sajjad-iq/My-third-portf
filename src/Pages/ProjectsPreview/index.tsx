import React from 'react'
import { MainWrapper } from '../../Components/common/MainWrapper.styled'
import { H1 } from '../../Components/common/H1.styled'
import { HeadDescription } from '../../Components/common/HeadDescription.styled'
import { HomeWrapper } from '../Home/styled/HomeWrapper.styled'
import { PrimaryButton } from '../../Components/common/PrimaryButton.styled'
import { ProjectsPageWrapper } from './styled/ProjectsPageWrapper.styled'
import { projects } from '../Projects/projects'
import { PreviewImage } from '../../Components/common/PreviewImage.styled'
import { getImage } from '../../services/getImage'
import { SecondaryDescription } from '../../Components/common/SecondaryDescription.styled'
import { H3 } from '../../Components/common/H3.styled'
import { Row } from '../../Components/common/Row.styled'
import { SkillCard } from '../../Components/common/SkillCard.styled'
import { ProjectsSecondaryWrapper } from '../../Components/common/ProjectsSecondaryWrapper.styled'

interface Props {
    index: number
}
export const ProjectsPreview = (props: Props) => {

    const getImageHandler = getImage()

    return (
        <MainWrapper>

            <HomeWrapper>
                <H1 className='animate-charcter'>{projects[props.index].ProjectName}</H1>

                <HeadDescription style={{ margin: "20px 0" }}>
                    This page contains the case study of {projects[props.index].ProjectName} Website which includes the Project Overview, Tools Used and Live Links to the official product.
                </HeadDescription>

                <div className='btn-gradient-1'>
                    <PrimaryButton className='' href={projects[props.index].ProjectLiveUrl} target={"_blank"}>LIVE LINK</PrimaryButton>
                </div>

            </HomeWrapper>



            <ProjectsPageWrapper>

                <ProjectsSecondaryWrapper>

                    <PreviewImage style={{ margin: "40px 0" }} src={getImageHandler(props.index)} alt='project image' />

                    <H3>Project Overview</H3>

                    <SecondaryDescription style={{ textAlign: "start" }}>
                        {projects[props.index].PreviewDescription}
                    </SecondaryDescription>

                    <SecondaryDescription style={{ textAlign: "start" }}>
                        {projects[props.index].DescriptionPartTow}
                    </SecondaryDescription>

                    <SecondaryDescription style={{ textAlign: "start" }}>
                        {projects[props.index].DescriptionPartThree}
                    </SecondaryDescription>

                    <SecondaryDescription style={{ textAlign: "start" }}>
                        Feel free to check out the Project by visiting the Live Link.
                    </SecondaryDescription>

                    <H3>Tools Used</H3>

                    <Row width='100%' padding='5px 0' align='flex-start' >
                        {projects[props.index].ProjectTools.map((e) => {
                            return <SkillCard key={e}>{e}</SkillCard>
                        })}
                    </Row>

                    <H3 style={{ margin: "30px 0" }}>See Live</H3>

                    <Row width='100%' padding='0' align='flex-start' >

                        <div className='btn-gradient-1' style={{ margin: "0 10px 0px 0" }} >
                            <PrimaryButton className='' href={projects[props.index].ProjectLiveUrl} target={"_blank"}>LIVE LINK</PrimaryButton>
                        </div>

                        <div className='btn-gradient-1' >
                            <PrimaryButton className='' href={projects[props.index].ProjectRepoUrl} target={"_blank"}>REPO LINK</PrimaryButton>
                        </div>

                    </Row>
                </ProjectsSecondaryWrapper>

            </ProjectsPageWrapper>

        </MainWrapper>
    )
}


export default ProjectsPreview