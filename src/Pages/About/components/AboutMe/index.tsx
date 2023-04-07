import { H3 } from '../../../../Components/common/H3.styled'
import { PrimaryButton } from '../../../../Components/common/PrimaryButton.styled'
import { SecondaryDescription } from '../../../../Components/common/SecondaryDescription.styled'
import { InnerWrapper } from '../../styled/InnerWrapper.styled'

export const AboutMe = () => {
    return (
        <InnerWrapper >
            <H3>Get to know me!</H3>

            <SecondaryDescription style={{ textAlign: "start" }}>
                I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
            </SecondaryDescription>

            <SecondaryDescription style={{ textAlign: "start" }}>
                I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
            </SecondaryDescription>

            <div className='btn-gradient-1'>
                <PrimaryButton ForHomePage={false}>
                    CONTACT
                </PrimaryButton>
            </div>

        </InnerWrapper>
    )
}
