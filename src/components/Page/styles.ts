import styled from "styled-components";

import img from './img/piroad.jpg'



export const Container = styled.div` 
  .colored:nth-child(1) {
  background-image: url(${img}); 
  background-size: cover;
  background-position: contain 50%;
 

 

}
  .colored:nth-child(2) {
    background-image: url(${img});  
  
}
.colored:nth-child(3) {
    background-image: url(${img});  
}
.colored:nth-child(4) {
  background-image: url(${img});  
}
.colored:nth-child(5) {
  background-image: url(${img});  
}
.colored:nth-child(6) {
background: #90f29c;
}
.colored:nth-child(7) {
background: #77e68c;
}
`