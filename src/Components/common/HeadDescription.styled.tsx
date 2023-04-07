import styled from "styled-components";
import { Colors } from "../../assets/Colors";
import { device } from "../../assets/breackPoints";

export const HeadDescription = styled.section`
 font-size:0.9rem;
 color:${Colors.Primary.Purple};
 margin:20px 0;
 text-align: center;
 word-wrap: break-word; 
 font-weight: 400;
 font-family: 'Open Sans', sans-serif;
 letter-spacing: 0.0.5em;
 line-height: 1.8em;
 
  @media ${device.tablet} {
  font-size:1rem;
  width:85%;
}
@media ${device.laptop} {
 font-size:1.1rem;
  width:75%;
  margin:15px 0;

}

@media ${device.laptopL} {
 font-size:1.2rem;
  width:55%;
}
`