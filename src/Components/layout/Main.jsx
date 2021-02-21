import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import styled from 'styled-components';
import { spacing } from '../../helpers/styles';
import Address from '../../pages/Address';

const Container = styled.main(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  alignItems: 'stretch',
  justifyContent: 'center',
  padding: spacing(4),
  maxWidth: 500,
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
