import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => { 
    const { push } = useHistory();   
    const { setState } = props;  
    
    useEffect(() => {
        axiosWithAuth()
        .post('/logout')
        .then(res => {
            localStorage.removeItem('token');
            push('/login');
        })
        .catch(err => {
            setState(err.response.data);
        })
    })
    return(<div></div>);
}

export default Logout;