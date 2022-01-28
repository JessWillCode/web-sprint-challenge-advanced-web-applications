import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios';

const Login = () => {
    const [state, setState] = useState({
        username: 'Lambda',
        password: 'School',
        error: ''
    });
    const { push } = useHistory();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/login`, state)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('username', res.data.username);
            push('/view');
        })
        .catch(err => {
            setState({
                ...state,
                error: err.response.data
            })
            
        })
    }
    
    return(
    <ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            <FormGroup>
                <Label>Username:</Label>
                <Input
                type='text'
                name='username'
                id='username'
                value={state.username}
                onChange={handleChange}
                />
                <Label>Password:</Label>
                  <Input
                type='password'
                name='password'
                id='password'
                value={state.password}
                onChange={handleChange}
                />
                <Button id='submit' onClick={handleLogin}>Log in</Button>
            </FormGroup>
            <p id='error'>{state.error}</p>
        </ModalContainer>
    </ComponentContainer>);
}

export default Login;


const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
