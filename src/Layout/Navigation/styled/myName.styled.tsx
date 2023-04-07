import styled from "styled-components";
import { Colors } from "../../../assets/Colors";
import { device } from "../../../assets/breackPoints";

export const MyName = styled.h2`
 font-size: 1rem;
 margin:0 13px;
 color:${Colors.Primary.Black};
 font-family: 'Kanit', sans-serif;
 font-weight: 600;
letter-spacing: 0.1em;

@media ${device.laptop} {
 margin:0;
  padding: 15px 20px;
}
@media ${device.desktop} {
  font-size: 1.1rem;
}
`