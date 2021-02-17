import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import styled from 'styled-components';

const Container = styled.main(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Main = () => (
  <Container>
    <Switch>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      <Route path="/users">
        <h1>Users</h1>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Container>
);

export default Main;
