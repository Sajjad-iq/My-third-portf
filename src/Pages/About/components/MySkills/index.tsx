import React from 'react'
import { Column } from '../../../../Components/common/Column.styled'
import { H3 } from '../../../../Components/common/H3.styled'
import { Row } from '../../../../Components/common/Row.styled'
import { skills } from './skills'
import { SkillCard } from '../../../../Components/common/SkillCard.styled'
import { InnerWrapper } from '../../styled/InnerWrapper.styled'

export const MySkills = () => {
    return (
        <InnerWrapper>
            <H3 style={{ margin: "10px 0" }}>My Skills</H3>

            <Row width='100%' padding='0' align='flex-start' style={{ flexWrap: "wrap" }}>
                {skills.map((e) => {
                    return <SkillCard key={e.Skill}>{e.Skill}</SkillCard>
                })}
            </Row>
        </InnerWrapper>
    )
}
