import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F1F1F1;
    opacity: 1;

`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    background-color: #FFFFFF;
    opacity: 1;
    @media (max-width: 375px) {
        justify-content: space-between;
        align-items: center;
        flex-direction: column; 
        height: auto; 
        width: 100%;
    }
`;

export const LogoAgrada = styled.div`
    margin-top: 46px;
    margin-right: 50px;
    width: 192px;
    height: 30px;
    @media (max-width: 375px) {
        margin-right: 20px;
        width: auto;
    }
`

export const Input = styled.input`
    margin-top: 40px;
    margin-right: 5px;
    margin-left: 30px;
    width: 450px;
    height: 35px;
    background-color: #ededed;
    border-radius: 5px;
    opacity: 1;
    @media (max-width: 375px) {
        margin-right: 0px;
        width: auto; 
    }
`

export const InputLable = styled.p`
    margin-top: 52px;
    margin-left: 604px;
    width: 126px;
    height: 17px;
    text-align: left;
    font-family: 'Poppins';
    font-size: 12px;
    font-weight: normal;
    color: #707070;
    opacity: 1;
    @media (max-width: 375pxpx) {
        margin-left: 20px;
        text-align: left;
    }
`
export const Login = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 53px;
    width: 85px;
    height: 23px;
    img{
        margin-left: 30px;
        margin-right: 5px;
        width: 20px;
        height: 23px;
        background: transparent;
        opacity: 1;
        @media (max-width: 375) {
            margin-right: 10px;
            width: 24px;
            height: 25px;
        }
    }
    p{
        cursor: pointer;
        margin-top: 5px;
        width: 65px;
        text-align: left;
        font-family: 'Poppins';
        font-size: 12px;
        font-weight: normal;
        &:hover {
            color:  #800080;
            text-decoration: underline;
        }
        @media (max-width: 375px) {
            margin-left: 5px;
            margin-top: 0px;
            width: auto;
            font-size: 20px;
            font-weight: 400;
        }
    }
    @media (max-width: 375px) {
        display: flex;
        margin-left: 0px;
        width: auto;
        grid-template-columns: 1fr;
        align-items: center;  
    }
`

export const CallService = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 55px;
    margin-left: 50px;
    width: 95px;
    height: 23px;

    @media (max-width: 375px) {
        width: auto;
        display: flex;
        margin-left: 30px; 
        margin-top: 55px;
    }
    img{
        margin-right: 8px;
        width: 25px;
        height: 23px;
        background: transparent;
        opacity: 1;
        @media (max-width: 375px) {
            margin-right: 10px;
    }
    }
    p{
        margin-top: 3px;       
        text-align: left;
        font-family: 'Poppins';
        font-size: 12px;
        font-weight: normal;
        color: #000000;
        opacity: 1;
        cursor: pointer;
        &:hover {
            color:  #800080;
            text-decoration: underline;
        }
        /* @media (max-width: 375px) {
            margin: 0;
            text-align: center;
            font-size: 11px;
    } */
    }
    
`

export const Cart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 53px;
    margin-left: 35px;
    width: 82px;
    height: 23px;
    img{
        margin-right: 10px;
        width: 24px;
        height: 23px;
        background: transparent;
        opacity: 1;
    }
    p{
        margin-top: 5px;
        width: 52px;
        text-align: left;
        font-family: 'Poppins';
        font-size: 12px;
        font-weight: normal;
        &:hover {
            color:  #800080;
            text-decoration: underline;
        }
    }
    @media (max-width: 375px) {
        width: auto;
        display: flex;
        margin-right: 10px;
    }
`

export const Banner = styled.div`
    width: 100%;
    justify-content: center;
    background-color: #FFFFFF;
    opacity: 1;
        img{
        margin-top: 20px;
        width: 100%;
        height: auto;
        background: transparent;
    }
`

export const Category = styled.div`
    width: 100%;
    max-width: 1251px;
    height: 567px;
    /* margin: 72px auto; */
    margin-left: 100px;
    /* margin-bottom: 30px; */
    @media (max-width: 375px) {
        width: auto;
        /* max-width: 375px; */
        height: auto;
        /* margin: 72px auto; */
        max-width: 400px;
        margin: 0 auto;
    }
`

export const Image = styled.div`
    display: flex;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
    margin-left: 100px;
    width: 1250px;
    height: 260px;
    justify-content: space-between;
    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 0;
        margin-top: 20px;
        margin-bottom: 20px;
        width: auto;
        }
    img{
        width: 620px;
        height: 260px;
        @media (max-width: 375px) {
            width: auto;
            height: auto;
        }
        /* .templates{
                margin-right: 10px;
            @media (max-width: 375px) {
                margin-right: 5px;
            }
        } */
    }
`
export const Div = styled.div`
    .clonedCategoryContainerRef{
        width: 100%;
        max-width: 1285px;
        height: auto;
        margin: 72px auto;
        margin-left: 100px;
        margin-bottom: 30px;
        @media (max-width: 375px) {
            width: auto;
            /* max-width: 375px; */
            height: auto;
            /* margin: 72px auto; */
            max-width: 400px;
            margin: 0 auto;
        }
}
`

export const AgradaResume = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 118px;
    background-color: #000000;
    opacity: 1;
    @media (max-width: 375px) {
        width: auto;
    }
    img{
        margin-right: 46px;
        width: 184px;
        height: 29px;
        background-color: transparent;
        opacity: 1;
        @media (max-width: 375px) {
            margin-right: 40px;  
            width: auto;
        }
    }
    p{
        width: 1000px;
        height: 58px;
        text-align: left;
        font: normal;
        font-size: 12px;
        font-family: 'Axiforma';
        color: #FFFFFF;
        @media (max-width: 375px) {
            width: 60%;
            text-align: left;
        }
    }
`
export const Payment = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 155px;
    background: #FFFFFF;
    opacity: 1;
    @media (max-width: 375px) {
        width: 100%;
        height: 110px;
        /* padding: 10px; */
    }
    p{
        margin-left: 125px;
        width: 91px;
        height: 21px;
        text-align: center;
        font-weight: normal;
        font-size: 15px;
        font-family: 'Poppins';
        @media (max-width: 375px) {
            margin-bottom: 0;
            width: auto;
            /* font-size: 14px; */
        }
    }
    img{
        width: 350px;
        height: 25px;
        background: transparent;
        opacity: 1;
        @media (max-width: 375px) {
            margin-bottom: 10px;
            width: 100%;
            height: 50%;
        }
    }
`
export const LoginModal = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);    
    position: absolute;
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 1;
    width: 177px;
    height: 157px;

    @media (max-width: 375px) {
        width: calc(100% - 40px);
        height: auto;
        margin-left: 20px;
        margin-top: 20px;
    }
    p{
        margin-left: 78px;
        margin-bottom: 0px;
        margin-top: 0px;
        width: 17px;
        height: 17px;
        text-align: center;
        font-weight: normal;
        font-size: 12px;
        font-family: 'Poppins';
        letter-spacing: 0px;
        text-decoration: none;
        color: #000000;
        opacity: 1;
    }
`;

export const LoginButton = styled.button`
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    width: 137px;
    height: 40px;
    background: #34CB2E;
    border-radius: 5px;
    opacity: 1;
    text-align: center;
    font-weight: 800; 
    font-size: 13px;
    font-family: 'Poppins';
    letter-spacing: 0px;
    color: #000000;
 `   
export const CadastroButon = styled.button`
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 20px;
    width: 137px;
    height: 40px;
    background-color: #000000;
    border-radius: 5px;
    opacity: 1;
    text-align: center;
    font-weight: 800;
    font-size: 13px;
    font-family: 'Poppins';
    letter-spacing: 0px;
    color: #FFFFFF;
    @media (max-width: 375px) {
                width: 100%;
                max-width: 137px;
    }
    `   

export const CartModal = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 1;
    margin-top: -328px;
    margin-left: 428px;
    width: 400px;
    height: 80px;
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 1;
    button{
        cursor: pointer;
        margin-left: 50px;
        margin-top: 0px;
        display: flex;
        justify-content: center;
        width: 20px;
        height: 25px;
        font-weight: normal;
        font-size: 15px;
        font-family: 'Poppins';
    }
    p{
        margin-left: 88px;
        margin-right: 5px;
        margin-top: 32px;
        align-items: center;
    }
    @media (max-width: 375px) {
        width: 100%;
        margin-left: 0;
        flex-direction: column;
        height: auto;
    }
`

export const CallModal = styled.div`
    margin-top: 30px;
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    text-decoration: none;
    z-index: 1;
    width: 190px;
    height: 138px;
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    opacity: 1;
    p{
        margin-top: auto;        
        width: 137px;
        height: 43px;
        text-align: left;
        font-weight: normal;
        font-size: 12px;
        font-family: 'Poppins';
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    button{
        cursor: pointer;
        margin-top: 15px;
        margin-bottom: auto;
        width: 137px;
        height: 40px;
        background: #34CB2E;
        border-radius: 5px;
        opacity: 1;
    }
`
