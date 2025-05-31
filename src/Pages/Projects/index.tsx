import { Dispatch, SetStateAction } from 'react'
import { SecondaryWrapper } from '../../Components/common/SecondaryWrapper.styled'
import { Column } from '../../Components/common/Column.styled'
import { H2 } from '../../Components/common/H2.styled'
import { HeadDescription } from '../../Components/common/HeadDescription.styled'
import { UnderTextLine } from '../../Components/common/UnderTextLine.styled'
import { ProjectCard } from '../../Components/shared/ProjectCard'
import { projects } from './projects'
import { getImage } from '../../services/getImage'
import { useNavigate } from 'react-router-dom'

interface Props {
    setIndex: Dispatch<SetStateAction<number>>
}
export const Projects = (props: Props) => {

    const getImageHandler = getImage()
    const Navigate = useNavigate()

    const GetProject = (index: number) => {
        Navigate("/project")
        props.setIndex(index)

    }

    return (
        <SecondaryWrapper id='projects'>

            <Column width='100%' padding='30px 0' align='center'>
                <H2 className='animate-charcter'>PROJECTS</H2>
                <UnderTextLine />

                <HeadDescription >
                    Here you will find a list of projects that I have worked on.
                </HeadDescription>
            </Column>

            {projects.map((e, i) => {
                return <ProjectCard key={i} Image={getImageHandler(i)} ProjectName={e.ProjectName} Description={e.PreviewDescription} onClick={() => GetProject(i)} />
            })}
        </SecondaryWrapper>
    )
}
