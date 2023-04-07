import "./style.css"

interface Props {
    To: string
    Name: string
}

export const NavButton = (props: Props) => {
    return (
        <a className="nav-link-button" href={props.To}
        >
            {props.Name}
        </a>
    )
}
