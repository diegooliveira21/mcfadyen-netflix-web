import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LOGIN_URL } from 'screens/login/login.type';
import { SHOWS_URL } from 'screens/shows/shows.type';
import Guard from 'components/guard/guard';
import Login from 'screens/login/login.screen';
import theme from 'themes/main/theme';
import { GlobalStyles } from 'themes/main/global-styles';
import ShowsList from 'screens/shows/shows';
import store from 'store/store/store';
import Show from 'screens/show/show';
import { SHOW_URL } from 'screens/show/show.type';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route
            element={(
              <Guard>
                <ShowsList />
              </Guard>
            )}
            path={SHOWS_URL}
          />
          <Route
            element={(
              <Guard>
                <Show />
              </Guard>
            )}
            path={SHOW_URL}
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
