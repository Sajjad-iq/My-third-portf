import React from 'react'
import { SecondaryWrapper } from '../../Components/common/SecondaryWrapper.styled'
import { Column } from '../../Components/common/Column.styled'
import { H2 } from '../../Components/common/H2.styled'
import { HeadDescription } from '../../Components/common/HeadDescription.styled'
import { UnderTextLine } from '../../Components/common/UnderTextLine.styled'
import { ProjectCard } from '../../Components/shared/ProjectCard'
import { projects } from './projects'
import { getImage } from '../../services/getImage'

export const Projects = () => {

    const getImageHandler = getImage()

    return (
        <SecondaryWrapper id='projects'>

            <Column width='100%' padding='30px 0' align='center'>
                <H2 className='animate-charcter'>PROJECTS</H2>
                <UnderTextLine />

                <HeadDescription >
                    Here you will find some from my 27 git repo for personal projects that I created with each project containing its own case study
                </HeadDescription>
            </Column>

            {projects.map((e, i) => {
                return <ProjectCard key={i} Image={getImageHandler(i)} ProjectName={e.ProjectName} Description={e.PreviewDescription} onClick={() => ""} />
            })}
        </SecondaryWrapper>
    )
}
