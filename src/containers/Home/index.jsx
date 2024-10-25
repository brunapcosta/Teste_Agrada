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
    Payment,
    LoginButton,
    LoginModal,
    CartModal,
    CadastroButon,
    CallModal,
    Div
} from './styles';


function Home() {
    
    const [keyPressed, setKeyPressed] = useState();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [cartMessage, setCartMessage] = useState('');
    const [isCloned, setIsCloned] = useState(false);

    const categoryRef = useRef(null); 
    const clonedCategoryContainerRef = useRef(null);

    const openCartModal = (productName) => {
        setCartMessage(`${productName} foi adicionado ao carrinho!`);
        setIsCartModalOpen(true);

        setTimeout(() => {
            setIsCartModalOpen(false);
        }, 100000);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };
        
    useEffect(() => {
        const handleKeyDown = (event) => {
          setKeyPressed(event.key);
          console.log(`Tecla pressionada ${event.key}`);

            if (event.key === 'Faça Login') {
                setIsLoginModalOpen(true);
            } else if (event.key === 'Atendimento') {
                setIsCallModalOpen(true);
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    useEffect(() => {


        if (categoryRef.current && clonedCategoryContainerRef.current && !isCloned) {
            const categoryClone = categoryRef.current.cloneNode(true);
            clonedCategoryContainerRef.current.innerHTML = '';
            clonedCategoryContainerRef.current.appendChild(categoryClone);
            setIsCloned(true);
        }
    }, [isCloned]);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const openCallModal = () => setIsCallModalOpen(true);
    const closeCallModal = () => setIsCallModalOpen(false);

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
                    <p onClick={openLoginModal} >Faça Login {keyPressed}</p>
                    {isLoginModalOpen && (
                        <LoginModal className="login-modal">
                            <LoginButton onClick={closeLoginModal}>Faça o login</LoginButton>
                            <p>ou</p>
                            <CadastroButon className='Cadastro' onClick={closeLoginModal}>Cadastre-se</CadastroButon>
                        </LoginModal>
                    )}
            </Login>
            <CallService>
                <img src={CallImg} alt='icone-Atendimento' />
                <p onClick={openCallModal}>Atendimento {keyPressed}</p>
                {isCallModalOpen && (
                    <CallModal>
                        <p>Somos os verdadeiros especialistas em e-commerce</p>
                        <button className='Fechar' onClick={closeCallModal}>Cadastre-se</button>
                    </CallModal>
                )}
            </CallService>
            <Cart>
                <img src={CartIcon} alt='icone-Carrinho' />
                <p>Carrinho</p>
            </Cart>
        </Header>
            <Banner>
                <img src={FullBanner} alt='Banner-Agrada' />
            </Banner>
            <Category ref={categoryRef} className='categoryOne'>
                <h1>Vitrine de Produtos</h1>
                <Carousel openCartModal={openCartModal} />
            </Category>
            {isCartModalOpen && (
                    <CartModal>
                        <p>{cartMessage}</p>
                        <button onClick={closeCartModal}>×</button>
                    </CartModal>
                )}
            <Image>
                <img src={BannerTemplates} className='templates' alt='banner-templates' />
                <img src={BannerServices} alt='banner-serviços' />
            </Image>
            <Div ref={clonedCategoryContainerRef}></Div>
            <AgradaResume>
                <img src={LogoWithe} alt='Logo-Agrada' />
                <p>A Agrada conta com uma equipe de profissionais com mais de 10 anos de experiência no mercado de e-commerce, e tem como objetivo desmistificar e simplificar a relação entre o cliente e a agência.
                    Aqui não falamos em “budget”, não temos “head of experience”, nem “CEO”. Entendemos que o processo de um projeto de e-commerce já é complexo o suficiente, não precisamos complicá-lo ainda
                    mais. Buscamos uma relação simples, preto no branco, da forma que deve ser.</p>
            </AgradaResume><Payment>
                <p>Pagamento</p>
                <img src={PaymentImg} alt='Formas de pagamento' />
            </Payment>
        </Container>
        </>
    )
}

export default Home;