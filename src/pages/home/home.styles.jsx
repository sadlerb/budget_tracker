import styled from "styled-components";


export const HomeContainer = styled.div`
    width: 70%;
    
    @media screen and (max-width: 600px){
        width: 90%;

    

}
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 15px;
    border-radius: 10px 10px 0px 0px; 
    &[disabled]{
        
        pointer-events: none;
        opacity: 0.5;
    }
    
    h3{
            font-weight: 300;
        }
        .balance{
            display: flex;
            flex-direction: column;
            .income{
                align-items: center;
                display: flex;
                flex-direction: row;
            }
        }
        h2{
            font-weight: 400;
            padding: 10px 0px;
            
        }
`
export const GraphContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    width:100%
    canvas{

        width:500px;
        height:500px
    }
    
  
`

export const EditButton = styled.button`
    margin-top: 20px;
    border: none;
    width: 110px;
    height: 40px;
    border-radius: 40px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`
/* .home-container{
    width: 70%;
    .home[disabled]{
        pointer-events: none;
        opacity: 0.5;
        
    } */
    // .home{
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    //     padding: 15px;
    //     border-radius: 10px 10px 0px 0px;
    //     h3{
    //         font-weight: 300;
    //     }
    //     .balance{
    //         display: flex;
    //         flex-direction: column;
    //         .income{
    //             align-items: center;
    //             display: flex;
    //             flex-direction: row;
    //         }
    //     }
    //     h2{
    //         font-weight: 400;
    //         padding: 10px 0px;
            
    //     }
        // .graph{
        //     align-items: center;
        //     justify-content: center;
        //     display: flex;
        
        //     span{
        //         height: 250px;
        //         width: 250px;
        //         background-color: #bbb;
        //         border-radius: 50%;
        //         display: inline-block;
        //     }
        // }
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



