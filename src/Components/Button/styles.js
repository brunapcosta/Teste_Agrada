import styled from "styled-components";

export const ContainerButton = styled.button`
    margin-top: 40px;
    margin-right: 7px;
    width: 180px;
    height: 40px;
    background: #34cb2e;
    border-radius: 5px;
    opacity: 1;
    font-weight: bold;
    font-size: 14px;
    font-family: 'Poppins';
    cursor: pointer;
    @media (max-width: 375px){
        width: auto;
        /* margin-right: 5px; */
    }
`