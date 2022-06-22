import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './screens/login/login.screen';
import theme from './themes/main/theme';
import { GlobalStyles } from './themes/main/global-styles';
import MoviesList from './screens/movies-list/movies-list';
import { LOGIN_URL } from './screens/login/login.type';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.type';
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
