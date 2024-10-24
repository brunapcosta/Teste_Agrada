import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { Button } from "../Button";
import Work from '../../assets/image2.png';
import DealDone from '../../assets/image1.png';
import CellPhone from '../../assets/image2.png';
import BusinessPartners from '../../assets/image3.png';
import {
    CarouselContainer,
    SlideContent
} from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Carousel({ openCartModal }) {

    return(
        <CarouselContainer>
            <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}">${index + 1}</span>`;
                },
             }}
            
            navigation
            loop={true}
            slidesPerView={4}
            direction="horizontal"
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            effect="fade"
            speed={500}
            spaceBetween={10}
            breakpoints={{

                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
            }}
        >
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ Work } alt="foto-produto" />
                    <p className="title">Produto1</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button onClick={() => openCartModal('Produto1')}>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ DealDone } alt="foto-produto" />
                    <p className="title">Produto2</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button onClick={() => openCartModal('Produto2')}>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ CellPhone } alt="foto-produto" />
                    <p className="title">Produto3</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button onClick={() => openCartModal('Produto3')}>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ BusinessPartners } alt="foto-produto" />
                    <p className="title">Produto4</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button onClick={() => openCartModal('Produto4')}>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ Work } alt="foto-produto" />
                    <p className="title">Produto5</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button onClick={() => openCartModal('Produto5')}>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ Work } alt="foto-produto" />
                    <p className="title">Produto6</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button onClick={() => openCartModal('Produto6')}>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
            </Swiper>
        </CarouselContainer>
    )
}


export default Carousel;