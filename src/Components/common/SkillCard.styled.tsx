import styled from "styled-components";
import { Colors } from "../../assets/Colors";
import { device } from "../../assets/breackPoints";

export const SkillCard = styled.section`
 border-radius: 6px;
 background: ${Colors.Primary.Lightgrey};
 margin:15px 15px 0px 0px;
 padding: 10px 15px;
 color:${Colors.Primary.brown};
 font-size:0.8rem;
 font-weight: 600;

  @media ${device.laptopL} {
 font-size:1rem;
}
`