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
    @media (max-width: 768px) {
        flex-direction: column; 
        height: auto; 
    }
`;

export const LogoAgrada = styled.div`
    margin-top: 46px;
    margin-right: 50px;
    width: 192px;
    height: 30px;
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
    @media (max-width: 768px) {
        width: 100%; 
        margin-left: 0; 
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
    @media (max-width: 768px) {
        margin-left: 0;
        text-align: center;
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
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        align-items: center; 
        margin: 10px 0; 
    }
`

export const CallService = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 55px;
    margin-left: 50px;
    width: 95px;
    height: 23px;
    img{
        margin-right: 8px;
        width: 25px;
        height: 23px;
        background: transparent;
        opacity: 1;
    }
    p{
        margin-top: 3px;       
        text-align: left;
        font-family: 'Poppins';
        font-size: 12px;
        font-weight: normal;
        color: #000000;
        opacity: 1;
        &:hover {
            color:  #800080;
            text-decoration: underline;
        }
    }
    @media (max-width: 768px) {
        margin-left: 0px; 
        justify-content: center; 
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
    @media (max-width: 768px) {
        margin-left: 0px; 
        justify-content: center; 
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
        height: 500px;
        background: transparent;
    }
`

export const Category = styled.div`
    width: 1285px;
    height: 567px;
    margin-top: 72px;
    margin-left: 100px;
    margin-bottom: 30px;
`

export const Image = styled.div`
    display: flex;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
    margin-left: 100px;
    width: 1250px;
    height: 260px;
    .templates{
        width: 620px;
        height: 260px;
        margin-right: 10px;
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
    img{
        margin-right: 46px;
        width: 184px;
        height: 29px;
        background-color: transparent;
        opacity: 1;
    }
    p{
        width: 1000px;
        height: 58px;
        text-align: left;
        font: normal;
        font-size: 12px;
        font-family: 'Axiforma';
        color: #FFFFFF;
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
    p{
        margin-left: 125px;
        width: 91px;
        height: 21px;
        text-align: center;
        font-weight: normal;
        font-size: 15px;
        font-family: 'Poppins';
    }
    img{
        width: 350px;
        height: 25px;
        background: transparent;
        opacity: 1;
    }
`
