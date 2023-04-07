import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const MyLogo = styled.img`
width: 38px ;
height: 38px;
border-radius: 50%;
object-fit:cover;

@media ${device.laptop} {
width: 47px;
height: 47px;
}
`