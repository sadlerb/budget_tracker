import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 70%;
  padding: 15px;
  background-color: gray;
  border-radius: 0px 0px 10px 10px;
  @media screen and (max-width: 600px) {
   nav {
     width: 90%;
     justify-content: space-between;
   }
 }

`

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
`

export const StyledNavLink = styled(NavLink)`
      
  height: 40px;
  width: 40px;
  border-radius: 10px;
  fill: white;
  display: flex;
  &:hover {
    fill: aqua;
  }

  &.active {
    background-color: aqua;
    fill: rgb(0, 19, 21);
    transition: all 1s;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`



// nav {
//   position: fixed;
//   bottom: 0;
//   width: 70%;
//   padding: 15px;
//   background-color: gray;
//   border-radius: 0px 0px 10px 10px;
//   div {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     list-style-type: none;
    
//     li {
//       .nav-link {
//         height: 40px;
//         width: 40px;
//         border-radius: 10px;
//         fill: white;
//         display: flex;
//         &:hover {
//           fill: aqua;
//         }

//         &.active {
//           background-color: aqua;
//           fill: rgb(0, 19, 21);
//           transition: all 1s;
//         }
//         svg {
//           width: 40px;
//           height: 40px;
//         }
//       }
//     }
//   }
// }

// @media screen and (max-width: 600px) {
//   nav {
//     width: 90%;
//     justify-content: space-between;
//   }
// }
