import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const ProjectWrapper = styled.section`
 width:100%;
 display: flex;
 justify-content: space-between;
 align-items:center;
 flex-direction: column;
 margin-top:5rem ;

 @media ${device.tablet} {
   padding:0px 35px;
    margin-top:8rem ;

}

 @media ${device.laptop} {
    padding:0px 15px;
    flex-direction: row;
    margin-top:8rem ;
}

 @media ${device.laptopL} {
     padding:0px 20px;
     margin-top:10rem ;
}

 @media ${device.desktop} {
margin-top:9rem ;

}

`