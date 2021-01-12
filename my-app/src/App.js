import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import StaticLayout from './layouts/StaticLayout';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import CartPage from './pages/CartPage';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import HowToEnjoy from './pages/HowToEnjoy';
import OriginalPage from './pages/OriginalPage';
import MatchaPage from './pages/MatchaPage';

import './default.scss';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
            <HomepageLayout>
            <Landing />
            </HomepageLayout>
        )}/>
        <Route exact path="/shop" render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
        )}/>
        <Route path="/shop/original" render={() => (
            <MainLayout>
              <OriginalPage />
            </MainLayout>
        )}/>
        <Route path="/shop/matcha" render={() => (
            <MainLayout>
              <MatchaPage />
            </MainLayout>
        )}/>
        <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
        )}/>
        <Route path="/aboutUs" render={() => (
            <StaticLayout>
              <AboutUs />
            </StaticLayout>
        )}/>
        <Route path="/howToEnjoy" render={() => (
            <StaticLayout>
              <HowToEnjoy />
            </StaticLayout>
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
