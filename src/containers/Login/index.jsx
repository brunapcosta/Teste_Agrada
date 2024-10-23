import React from 'react';
import { Button } from '../../Components/Button';

function Login() {

    return(
        <Container>

                <h2>Login</h2>
                    <form>
                        <Input type="email" placeholder="email" required />
                        <Input type="password" placeholder="Senha" required />
                        <Button type="submit">Entrar</Button>
                    </form>
                    <SwitchButton onClick={toggleForm}>Criar uma conta</SwitchButton>
        </Container>
    )
}

export default Login;