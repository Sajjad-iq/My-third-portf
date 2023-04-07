import styled from "styled-components";
import back from '../../../assets/Icons/svg/confetti-doodles.svg'
import { device } from "../../../assets/breackPoints";
export const HomeWrapper = styled.section`
 width:100%;
 display: flex;
 justify-content: center;
 align-items:center;
 flex-direction: column;
 height: 650px;
 padding: 15px;
 background: url(${back});
 position: relative;


@media ${device.tablet} {
 height: 1024px;
}

@media ${device.laptop} {
 height: 100vh;
}


`