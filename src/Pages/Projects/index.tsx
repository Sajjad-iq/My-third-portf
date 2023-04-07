import React from 'react'
import { SecondaryWrapper } from '../../Components/common/SecondaryWrapper.styled'
import { Column } from '../../Components/common/Column.styled'
import { H2 } from '../../Components/common/H2.styled'
import { HeadDescription } from '../../Components/common/HeadDescription.styled'
import { UnderTextLine } from '../../Components/common/UnderTextLine.styled'
import { ProjectCard } from '../../Components/shared/ProjectCard'

export const Projects = () => {
    return (
        <SecondaryWrapper id='projects'>

            <Column width='100%' padding='30px 0' align='center'>
                <H2 className='animate-charcter'>PROJECTS</H2>
                <UnderTextLine />

                <HeadDescription >
                    Here you will find some of the personal projects that I created with each project containing its own case study
                </HeadDescription>
            </Column>

            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </SecondaryWrapper>
    )
}
