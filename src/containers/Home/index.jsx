import React, { useEffect, useRef, useState } from 'react';
import AgradaLogo from '../../assets/logos-agrada.png';
import LoginImg from '../../assets/icon-login.png';
import CallImg from '../../assets/icon-call.png';
import CartIcon from '../../assets/icon-cart.png';
import FullBanner from '../../assets/full-banner.png';
import { Button } from '../../Components/Button';
import Carousel from '../../Components/Carousel';
import BannerTemplates from '../../assets/banner-templates.png';
import BannerServices from '../../assets/banner-services.png';
import LogoWithe from '../../assets/Logo-white.png';
import PaymentImg from '../../assets/icon-pay.png';
import Modal from '../../Components/ModalLogin';
import {
    Container,
    Header,
    Input,
    Login,
    CallService,
    LogoAgrada,
    Cart,
    Banner,
    Category,
    Image,
    AgradaResume,
    Payment
} from './styles';


function Home() {

    const [isCloned, setIsCloned] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const categoryRef = useRef(null); 
    const imageRef = useRef(null); 

    useEffect(() => {
        
        if (categoryRef.current && !isCloned) {
            const categoryClone = categoryRef.current.cloneNode(true); 

            if (imageRef .current) {
                imageRef .current.appendChild(categoryClone);
                categoryRef.current.parentNode.insertBefore(categoryClone, imageRef.current.nextSibling);
            }

            setIsCloned(true);
        }
    }, [isCloned]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return(
        <>
        <Container>

            <Header>
                <LogoAgrada>
                    <img src={AgradaLogo} alt='agrada-logo' />
                </LogoAgrada>
                <Input type='text' placeholder='O que você procura?' />
                <Button>Buscar</Button>
                <Login>
                    <img src={LoginImg} alt='icon-login' />
                    <p onClick={openModal}>Faça Login</p>
            </Login>
            <CallService>
                <img src={CallImg} alt='icone-Atendimento' />
                <p>Atendimento</p>
            </CallService>
            <Cart>
                <img src={CartIcon} alt='icone-Carrinho' />
                <p>Carrinho</p>
            </Cart>
        </Header><Banner>
                <img src={FullBanner} alt='Banner-Agrada' />
            </Banner><Category ref={categoryRef} className='categoryOne'>
                <h1>Vitrine de Produtos</h1>
                <Carousel />
            </Category><Image>
                <img src={BannerTemplates} className='templates' alt='banner-templates' />
                <img src={BannerServices} alt='banner-serviços' />
            </Image><AgradaResume>
                <img src={LogoWithe} alt='Logo-Agrada' />
                <p>A Agrada conta com uma equipe de profissionais com mais de 10 anos de experiência no mercado de e-commerce, e tem como objetivo desmistificar e simplificar a relação entre o cliente e a agência.
                    Aqui não falamos em “budget”, não temos “head of experience”, nem “CEO”. Entendemos que o processo de um projeto de e-commerce já é complexo o suficiente, não precisamos complicá-lo ainda
                    mais. Buscamos uma relação simples, preto no branco, da forma que deve ser.</p>
            </AgradaResume><Payment>
                <p>Pagamento</p>
                <img src={PaymentImg} alt='Formas de pagamento' />
            </Payment>

        </Container>

        <Modal onClose={closeModal} />
        </>
    )
}

export default Home;