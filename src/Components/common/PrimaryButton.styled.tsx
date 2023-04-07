import styled from "styled-components";
import { Colors } from "../../assets/Colors";
import { device } from "../../assets/breackPoints";


export const PrimaryButton = styled.a`
 display: flex;
 justify-content: center;
 align-items:center;
 padding:15px 42px;
 color:${Colors.Primary.LightRed} ;
 background:none ;
 font-family: 'Kanit', sans-serif;
 font-weight: 800;
 letter-spacing: 0.3em;
 border-radius: 5px;
 border:none; 
 font-size:0.7rem;
 user-select: none;

 @media ${device.laptop} {
        font-size:0.8rem;
 }
 
  
`