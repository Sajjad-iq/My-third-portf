import styled from "styled-components";
import { device } from "../../../assets/breackPoints";
import { Colors } from "../../../assets/Colors";

export const H3 = styled.h3`
 font-size:1.2rem;
 margin:10px 0;
 text-align: center;
 word-wrap: break-word; 
 font-weight: 700;
 font-family: 'Open Sans', sans-serif;
 background: linear-gradient(to right, #44107a,#fc3a52);
 -webkit-text-fill-color: transparent;
 -webkit-background-clip: text;
 color:${Colors.Primary.white};

@media ${device.laptop} {
     margin:20px 0;
      font-size:1.4rem;
}

@media ${device.laptopL} {
      font-size:1.5rem;
}

`