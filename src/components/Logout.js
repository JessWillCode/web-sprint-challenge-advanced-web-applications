import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => { 
    const { push } = useHistory();     
    
    useEffect(() => {
        axiosWithAuth()
        .post('/logout')
        .then(res => {
            localStorage.removeItem('token');
            push('/login');
        })
        .catch(err => {
            console.log(err.response.data);
        })
    })
    return(<div></div>);
}

export default Logout;