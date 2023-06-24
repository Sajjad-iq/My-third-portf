import { SocialMediaLink } from '../../../../Components/shared/socialMediaLink';
import { WhiteCard } from '../../styled/whiteCard.style'
import Inst from "../../../../assets/Icons/img/instagram.webp"
import twitter from "../../../../assets/Icons/img/twitter-sign.webp"
import git from "../../../../assets/Icons/img/github.webp"
import linked from "../../../../assets/Icons/img/linkedin.webp"

export const SocialMediaLinks = () => {
    return (
        <WhiteCard style={{ display: window.innerWidth >= 1024 ? "flex" : "none" }}>
            <SocialMediaLink class='' To='https://www.linkedin.com/in/sajjad-kademm-a68294209/' Icon={linked} />
            <SocialMediaLink class='' To='https://twitter.com/Sajjad4Ios' Icon={twitter} />
            <SocialMediaLink class='' To='https://www.instagram.com/sajja3kademm' Icon={Inst} />
            <SocialMediaLink class='' To='https://github.com/Sajjad-iq' Icon={git} />
        </WhiteCard>
    )
}
