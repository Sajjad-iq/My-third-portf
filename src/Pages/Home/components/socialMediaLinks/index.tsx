import { SocialMediaLink } from '../../../../Components/shared/socialMediaLink';
import { WhiteCard } from '../../styled/whiteCard.style'
import Inst from "../../../../assets/Icons/img/instagram.png"
import twitter from "../../../../assets/Icons/img/twitter-sign.png"
import git from "../../../../assets/Icons/img/github.png"
import linked from "../../../../assets/Icons/img/linkedin.png"

export const SocialMediaLinks = () => {
    return (
        <WhiteCard style={{ display: window.innerWidth >= 1024 ? "flex" : "none" }}>
            <SocialMediaLink To='https://www.linkedin.com/in/sajjad-kademm-a68294209/' Icon={linked} />
            <SocialMediaLink To='https://twitter.com/Sajjad4Ios' Icon={twitter} />
            <SocialMediaLink To='https://www.instagram.com/sajja3kademm' Icon={Inst} />
            <SocialMediaLink To='https://github.com/Sajjad-iq' Icon={git} />
        </WhiteCard>
    )
}
