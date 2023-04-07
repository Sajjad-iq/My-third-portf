import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MouseEventHandler } from "react";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Button } from "./styled/Button.styled";


interface Props {
    isActive: boolean
    onClick: MouseEventHandler
    ActiveIcon: IconProp
    UnActiveIcon: IconProp
}
export const ToggleButton = (props: Props) => {
    return (
        <Button style={{ display: window.innerWidth > 720 ? "none" : "flex", padding: "0" }} onClick={props.onClick} >
            {
                props.isActive ?
                    <FontAwesomeIcon icon={props.ActiveIcon} />
                    :
                    <FontAwesomeIcon icon={props.UnActiveIcon} />
            }
        </Button>
    )
}
