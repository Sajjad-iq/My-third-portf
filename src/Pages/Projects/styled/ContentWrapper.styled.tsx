import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const ContentWrapper = styled.section`
 width:100%;
 display: flex;
 justify-content: flex-start;
 align-items:center;
 flex-direction: column;
 padding:20px 0px;
 

 @media ${device.tablet} {
  width:90%;
}

 @media ${device.laptop} {
 width:37%;
  align-items:flex-start;

}

`