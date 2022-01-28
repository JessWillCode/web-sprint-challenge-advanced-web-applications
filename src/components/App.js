import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';

import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import View from './View';
import Logout from './Logout';

const App = () => {
  return (
    <AppContainer>
      <BloomHeader/>
      <Header/>
      <RouteContainer>

      <PrivateRoute exact path="/logout">
          <Logout/>
        </PrivateRoute>

        <PrivateRoute exact path="/view">
          <View/>
        </PrivateRoute>

      <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/">
          <Login/>
        </Route>          
      </RouteContainer>
    </AppContainer>
  )
}

export default App;


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
