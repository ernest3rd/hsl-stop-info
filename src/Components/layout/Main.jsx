import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import styled from 'styled-components';
import Address from '../../pages/Address';

const Container = styled.main(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Main = () => (
  <Container>
    <Switch>
      <Route path="/stop/:stopId">
        <h1>Stop info</h1>
      </Route>
      <Route path="/address/">
        <Address />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Container>
);

export default Main;
