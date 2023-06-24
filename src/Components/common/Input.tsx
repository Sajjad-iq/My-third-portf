import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

export const Input = styled.input`
 font-size:0.9rem;
 margin:10px 0;
 font-weight: 600;
 font-family: 'Open Sans', sans-serif;
 padding:15px;
 width:100%;
 border-radius:5px;
 border: none;

&:focus{
      outline:2px solid ${Colors.Primary.Purple};
      border:none;
      }

 
@media ${device.laptop} {
   
}

@media ${device.laptopL} {
}

`