import styled from "styled-components";
import { Colors } from "../../assets/Colors";
import { device } from "../../assets/breackPoints";

interface Props {
  ForHomePage: boolean
}
export const PrimaryButton = styled.a<Props>`
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
 
${p => p.ForHomePage ?
    `
    margin:0;
    font-size:0.9rem;
    padding: 17px 65px;

   @media ${device.laptop} {
       padding: 20px 80px;
      font-size:1rem;
}

`
    :
    ``
  }
  
`