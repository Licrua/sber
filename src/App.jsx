import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import store from './store/index.js';
import HomePage from './pages/HomePage.jsx';
import UserPage from './pages/UserPage.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
  }
`;

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <AppWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path=":id" element={<UserPage />} />
          </Routes>
        </AppWrapper>
      </Router>
    </Provider>
  );
}

export default App;
