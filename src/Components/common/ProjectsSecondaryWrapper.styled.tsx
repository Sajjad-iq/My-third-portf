import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const ProjectsSecondaryWrapper = styled.section`
 width:100%;
 display: flex;
 justify-content: center;
 align-items:flex-start;
 flex-direction: column;
 
 @media ${device.tablet} {
    width:95%;
}

 @media ${device.laptop} {
     width:70%;
}

 @media ${device.laptopL} {
     width:60%;
}

 @media ${device.desktop} {
 width:50%;
}

`