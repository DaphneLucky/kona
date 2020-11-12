import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import CartPage from './pages/CartPage';

import './default.scss';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
        )}/>
        <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
        )}/>
        <Route path="/cart" render={() => (
            <MainLayout>
                <CartPage />
            </MainLayout>
        )}/>
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
