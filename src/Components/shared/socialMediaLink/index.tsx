import { SocialMediaIcon } from './img.styled'
import './styled.css'

interface Props {
    To: string
    Icon: string
}

export const SocialMediaLink = (props: Props) => {
    return (
        <a className="social-media-links" href={props.To} target={"_blank"}>
            <SocialMediaIcon src={props.Icon} alt='social medea icons' />
        </a>
    )
}
