import styled from "styled-components";
import { Colors } from "../../assets/Colors";
import { device } from "../../assets/breackPoints";

export const SecondaryDescription = styled.section`
width:100%;
 font-size:0.9rem;
 color:${Colors.Primary.brown};
 margin:10px 0;
 text-align: center;
 word-wrap: break-word; 
 font-weight: 400;
 font-family: 'Open Sans', sans-serif;
 letter-spacing: 0.0.5em;
 line-height: 1.8em;
 
  @media ${device.tablet} {
  font-size:1rem;
}
@media ${device.laptop} {
 font-size:1.1rem;
  margin:20px 0;
}

@media ${device.laptopL} {
 font-size:1.2rem;

}
`