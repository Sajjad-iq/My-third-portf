import { H3 } from '../../../../Components/common/H3.styled'
import { Row } from '../../../../Components/common/Row.styled'
import { frontendSkills, backendSkills } from './skills'
import { SkillCard } from '../../../../Components/common/SkillCard.styled'
import { InnerWrapper } from '../../styled/InnerWrapper.styled'

export const MySkills = () => {
    return (
        <InnerWrapper>
            <H3 style={{ margin: "10px 0" }}>Frontend Skills</H3>
            <Row width='fit-content' padding='0' align='flex-start' style={{ flexWrap: "wrap" }}>
                {frontendSkills.map((e) => {
                    return <SkillCard key={e.Skill}>{e.Skill}</SkillCard>
                })}
            </Row>

            <H3 style={{ margin: "50px 0 10px 0" }}>Backend Skills</H3>
            <Row width='fit-content' padding='0' align='flex-start' style={{ flexWrap: "wrap" }}>
                {backendSkills.map((e) => {
                    return <SkillCard key={e.Skill}>{e.Skill}</SkillCard>
                })}
            </Row>
        </InnerWrapper>
    )
}
