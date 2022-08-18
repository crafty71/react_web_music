import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import routes from './router';

import AppHeader from './components/app-header';
import React from 'react';

const Element = function RenderRoutes() {
  const Element = useRoutes(routes);
  return Element;
};
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader />
        <Suspense fallback={<div>page loading</div>}>
          <Element />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}
