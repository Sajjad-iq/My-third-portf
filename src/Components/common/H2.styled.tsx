import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

export const H2 = styled.section`
 font-size:2rem;
 color:${Colors.Primary.Black};
 margin:10px 0;
 text-align: center;
 word-wrap: break-word; 
 font-weight: 600;
 font-family: 'Open Sans', sans-serif;
 letter-spacing: 0.1em;

 @media ${device.tablet} {

}

@media ${device.laptop} {
margin:20px 0;
font-size:2.2rem;
font-weight: 700;

}

@media ${device.laptopL} {
      font-size:2.2rem;
}

`