import styled from "styled-components";
import { Colors } from "../../../assets/Colors";
import { device } from "../../../assets/breackPoints";



export const FormButton = styled.button`
 display: flex;
 justify-content: center;
 align-items:center;
 padding:18px 70px;
 color:${Colors.Primary.LightRed} ;
 background:none ;
 font-family: 'Kanit', sans-serif;
 font-weight: 800;
 letter-spacing: 0.3em;
 border-radius: 5px;
 border:none; 
 font-size:0.7rem;
 user-select: none;
  text-decoration: none;

  @media ${device.laptop} {
        font-size:0.8rem;
 }
 
  
`