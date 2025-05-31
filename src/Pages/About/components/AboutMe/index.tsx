import { H3 } from '../../../../Components/common/H3.styled'
import { PrimaryButton } from '../../../../Components/common/PrimaryButton.styled'
import { SecondaryDescription } from '../../../../Components/common/SecondaryDescription.styled'
import { InnerWrapper } from '../../styled/InnerWrapper.styled'

export const AboutMe = () => {
    return (
        <InnerWrapper >
            <H3>Get to know me!</H3>

            <SecondaryDescription style={{ textAlign: "start" }}>
                I'm a professional, detail-oriented <strong>Full Stack Developer</strong> currently working at <strong>TORCH CORP</strong>. I specialize in building robust web applications using <strong>Java Spring Boot</strong> for backend and <strong>React.js</strong> for frontend development. I'm particularly proud of my role in developing and maintaining the TORCH Glare UI components library, which serves as the foundation for all company products.
            </SecondaryDescription>

            <SecondaryDescription style={{ textAlign: "start" }}>
                With expertise in both frontend technologies (React.js, TypeScript, Tailwind CSS) and backend development (Java Spring Boot, Node.js, PostgreSQL), I bring a comprehensive approach to web development. I'm passionate about mentoring junior developers and contributing to improving development workflows and coding standards.
            </SecondaryDescription>

            <SecondaryDescription style={{ textAlign: "start" }}>
                I'm always open to exciting <strong>opportunities</strong> where I can contribute my expertise, learn new technologies, and grow professionally. If you have a challenging project or opportunity that matches my skills, feel free to <strong>contact</strong> me.
            </SecondaryDescription>

            <div className='btn-gradient-1'>
                <PrimaryButton href='#contact' >
                    CONTACT
                </PrimaryButton>
            </div>

        </InnerWrapper>
    )
}
