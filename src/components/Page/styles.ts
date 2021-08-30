import styled from "styled-components";

import img from './img/piroad.jpg'
import img2 from './img2/pexels.jpg'
import img3 from './img3/jteder.jpg'
import img4 from './img4/rezaorbaniI8.jpg'
import img5 from './img5/tobyparsonsm4.jpg'



export const Container = styled.div` 
  .colored:nth-child(1) {
  background-image: url(${img}); 
  background-size: cover;
  background-position: 50% 50%;
}
  .colored:nth-child(2) {
    background-image: url(${img2}); 
  background-size: cover;
  background-position: 50% 50%;  
  
}
.colored:nth-child(3) {
  background-image: url(${img3}); 
  background-size: cover;
  background-position: 50% 50%;
}
.colored:nth-child(4) {
  background-image: url(${img4}); 
  background-size: cover;
  background-position: 50% 50%;  
}
.colored:nth-child(5) {
  background-image: url(${img5}); 
  background-size: cover;
  background-position: 50% 50%;  
}
`


export const Spacer = styled.div`
  height: 15vh;
  background: #fff;
`