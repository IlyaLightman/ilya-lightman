import React from 'react';
import './App.scss';

import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout'

import MainPage from './containers/MainPage/MainPage'
import CalculatorPage from './containers/CalculatorPage/CalculatorPage'
import ProjectsPage from './containers/ProjectsPage/ProjectsPage'

function App() {
  return (
    <Layout >
      <Switch>
        <Route path='/calc' component={CalculatorPage} />
        <Route path='/tech' component={ProjectsPage} />
        <Route path='/' component={MainPage}/ >
      </Switch>
    </Layout>
  );
}

export default App;