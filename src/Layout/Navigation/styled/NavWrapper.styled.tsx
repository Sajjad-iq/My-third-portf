import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const NavWrapper = styled.section`
 width:100%;
 display: flex;
 justify-content: space-between;
 align-items:center;
 flex-direction: row;
 padding: 15px;
 position: fixed;
 top: 0px;
 background-color: white; 
 z-index:1;


 @media ${device.laptop} {
  padding: 15px 40px;
}
`