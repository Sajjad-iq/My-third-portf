import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const InnerWrapper = styled.section`
 width:100%;
 display: flex;
 justify-content: flex-start;
 align-items:flex-start;
 flex-direction: column;
 padding:20px;
 

 @media ${device.tablet} {
  width:90%;
}

 @media ${device.laptop} {
 width:45%;
}

`