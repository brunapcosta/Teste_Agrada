import React from 'react';
import { Button } from '../../Components/Button';


function Register() {
    return(
        <Container>
            <h2>Cadastro</h2>
                <form>
                    <Input type="text" placeholder="Nome completo" required />
                    <Input type="email" placeholder="Email" required />
                    <Input type="password" placeholder="Senha" required />
                    <Button type="submit">Cadastrar</Button>
                </form>
                <SwitchButton onClick={toggleForm}>Já tem uma conta? Faça login</SwitchButton>

        </Container>
    )
}

export default Register;