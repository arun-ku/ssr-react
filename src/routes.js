import React from 'react';
import App from './Components/App';
import Info from './Components/Info';
import { Switch, Route } from 'react-router-dom'

export const routes = [
  {
    path: '/',
    component: App,
    exact: true,
  },{
    path: '/info/:postId',
    component: Info,
  }
];

export default () => (
  <Switch>
    {routes.map((route, index) => <Route key={index} {...route} />)}
  </Switch>
);