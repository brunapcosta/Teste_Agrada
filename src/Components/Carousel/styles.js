import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1285px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 375px) {
    width: auto;
    max-width: 375px;
    margin: 0 auto;
    position: relative;
  }
`;

export const SlideContent = styled.div`
    width: 300px;
    height: 494px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
    opacity: 1;
    text-align: center;
    font-family: 'Poppins';
  img {
    width: 250px;
    height: 250px;
    margin-top: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    @media (max-width: 375px) {
      width: 300px;
    }
  }

  .title {
    width: 230px;
    height: 0px;
    color: #000000;
    text-align: center;   
    font-weight: normal;
    font-size: 13px;
    margin-top: 0px;
    margin-bottom: 15x;
    @media (max-width: 375px) {
      font-weight: 500;
      font-size: 24px;
        }
  }

  .price {
    width: 68px;
    height: 0px;
    font-weight: normal;
    font-size: 12px;
    text-decoration: line-through;
    color: #909090;
    @media (max-width: 375px) {
      width: auto;
      font-size: 21px;
      font-weight: 300;
    }
  }

  h2 {
    margin-top: 0px;
    width: 116px;
    height: 0px;
    font-weight: normal;
    font-size: 17px;
    color: #e63946;
    color: #34CB2E;
    @media (max-width: 375px) {
      width: auto;
      font-weight: 500;
      font-size: 30px;
    }
  }

  .payment {
    width: 172px;
    height: 0px;
    font-weight: normal;
    font-size: 12px;
    color: #909090;
  }
  @media (max-width: 375px) {
      width: auto;
      font-weight: 300;
      font-size: 21px;
    }
`;