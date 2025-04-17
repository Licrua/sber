import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import HomePage from './pages/HomePage.jsx';
import UserPage from './pages/UserPage.jsx';
import GlobalStyle from './styles/GlobalStyle.js'; 
import { PageWrapper } from './styles/Container.js';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<UserPage />} />
          </Routes>
        </PageWrapper>
      </Router>
    </Provider>
  );
}

export default App;
