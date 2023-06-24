import styled from "styled-components";
import { Colors } from "../../../assets/Colors";
import { device } from "../../../assets/breackPoints";


export const Description = styled.section`
 color:${Colors.Primary.white};
 width:100%;
 font-size:0.9rem;
 margin:10px 0;
 text-align: start;
 word-wrap: break-word; 
 font-weight: 400;
 font-family: 'Open Sans', sans-serif;
 letter-spacing: 0.0.5em;
 line-height: 1.8em;
 
@media ${device.laptopL} {
 font-size:1.2rem;

}
`