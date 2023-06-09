import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const SecondaryWrapper = styled.section`
 width:100%;
 display: flex;
 justify-content: center;
 align-items:center;
 flex-direction: column;
 padding:60px 15px;

 @media ${device.tablet} {
   padding:60px 35px;
}

 @media ${device.laptop} {
     padding: 60px 15px;
     width:95%;
}

 @media ${device.laptopL} {
     padding:60px 20px;
     width:93%;
}

 @media ${device.desktop} {
 width:75%;
}

`