import { SocialMediaLink } from '../../../../Components/shared/socialMediaLink'
import Inst from "../../../../assets/Icons/img/colorfully/instagram.webp"
import twitter from "../../../../assets/Icons/img/colorfully/twitter.webp"
import git from "../../../../assets/Icons/img/colorfully/github.webp"
import linked from "../../../../assets/Icons/img/colorfully/linkedin.webp"
import { Row } from '../../../../Components/common/Row.styled'

export const SocialMediaILinks = () => {

    return (
        <Row width='100%' padding='0' align='flex-start'>
            <SocialMediaLink class='for-footer' To='https://www.linkedin.com/in/sajjad-kademm-a68294209/' Icon={linked} />
            <SocialMediaLink class='for-footer' To='https://www.instagram.com/sajja3kademm' Icon={Inst} />
            <SocialMediaLink class='for-footer' To='https://github.com/Sajjad-iq' Icon={git} />
        </Row>
    )
}
