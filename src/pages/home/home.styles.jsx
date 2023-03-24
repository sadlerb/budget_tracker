import styled from 'styled-components'

const MainContainer = styled.div`
    width: 70%;
    &[disabled]{
        pointer-events: none;
        opacity: 0.5;
`

const HomeContainer = styled.div`
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 15px;
        border-radius: 10px 10px 0px 0px;
        &h3{
        font-weight: 300;
`

// .home-container{
//     width: 70%;
//     .home[disabled]{
//         pointer-events: none;
//         opacity: 0.5;
        
//     }
//     .home{
//         display: flex;
//         flex-direction: column;
//         box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//         padding: 15px;
//         border-radius: 10px 10px 0px 0px;
//         h3{
//             font-weight: 300;
//         }
//         h2{
//             font-weight: 400;
//             padding: 10px 0px;
            
//         }
//         .graph{
//             align-items: center;
//             justify-content: center;
//             display: flex;
        
//             span{
//                 height: 250px;
//                 width: 250px;
//                 background-color: #bbb;
//                 border-radius: 50%;
//                 display: inline-block;
//             }
//         }
//         button{
//             margin-top: 20px;
//             border: none;
//             width: 110px;
//             height: 40px;
//             border-radius: 40px;
//             box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);s
//             span{
//                 font-weight: 400;
//             }
//         }
//     }
// }

// @media screen and (max-width: 600px){
//     .home{
//         width: 90%;

//     }

// }


