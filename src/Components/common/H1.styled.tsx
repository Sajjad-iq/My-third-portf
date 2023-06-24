import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

export const H1 = styled.h1`
 font-size:2.7rem;
 color:${Colors.Primary.Black};
 margin:20px 0;
 text-align: center;
 word-wrap: break-word; 
 font-weight: 800;
 font-family: 'Oswald', sans-serif;
 letter-spacing: 0.0.9em;

 @media ${device.tablet} {
  font-size:3.3rem;
  width:80%;
}
@media ${device.laptop} {
  font-size:3.3rem;
}

@media ${device.desktop} {
  font-size:3.7rem;
}

`