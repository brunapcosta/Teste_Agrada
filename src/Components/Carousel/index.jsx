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

function Carousel() {

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
                640: {
                    spaceBetween: 10,
                },
                768: {
                    spaceBetween: 20,
                },
                1024: {
                    spaceBetween: 30,
                },
            }}
        >
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ Work } alt="foto-trabalho" />
                    <p className="title">Produto de Trabalho</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ DealDone } alt="foto-aperto-de-mão" />
                    <p className="title">Produto de Trabalho</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ CellPhone } alt="foto-Celular" />
                    <p className="title">Produto de Trabalho</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ BusinessPartners } alt="foto-empresas" />
                    <p className="title">Produto de Trabalho</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
                 <SwiperSlide>
                    <SlideContent>
                    <img src={ Work } alt="foto-trabalho" />
                    <p className="title">Produto de Trabalho</p>
                    <p className="price">R$ 2.049,00</p>
                    <h2>R$ 1.655,90</h2>
                    <p className="payment">Ou 10x de R$179,90 sem juros</p>
                    <Button>Comprar</Button>
                    </SlideContent>
                 </SwiperSlide>
            </Swiper>
        </CarouselContainer>
    )
}


export default Carousel;