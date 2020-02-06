import React from 'react';
import './App.scss';

import Layout from './hoc/Layout/Layout'
import MainPage from './containers/MainPage/MainPage'

function App() {
  return (
    <Layout >
      <MainPage />
    </Layout>
  );
}

export default App;