
import styled from "styled-components";

export const ExpensesContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const ExpenseCard = styled.div`
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 10px;
        height: 40px;
        width: 120px;
        text-align: center;
        padding: 10px 0px;
        
        p{
            font-weight: 100;
            
        }
        .amount{
            font-weight: bolder;
        }
    @media screen and (max-width: 600px){
    
        height: 30px;
        max-width: 100px;
        p{
            font-size: smaller;
        }
        
    }



    
`
export const ExpenceList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 40px 0px;
    p{
            font-weight: 100;
            
    }
    .amount{
        font-weight: bolder;
    }
        
`

// .expences{
//     display: flex;
//     align-items: center;
//     flex-direction: column;
    

//     .expence-card{
//         box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//         border-radius: 10px;
//         height: 40px;
//         width: 120px;
//         text-align: center;
//         padding: 10px 0px;
        
//         p{
//             font-weight: 100;
            
//         }
//         .amount{
//             font-weight: bolder;
//         }
//     }
//     .expence-container{
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//         width: 100%;
//         padding: 40px 0px;
        
//     }
    

//     .edit_icon{
//         width: 50px;
//         height: 50px;
//     }
    
// }

// @media screen and (max-width: 600px){
//     .expences{

//         .expence-card{
//             height: 30px;
//             max-width: 100px;
//             p{
//                 font-size: smaller;
//             }
//         }
//     }

// }
