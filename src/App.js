import { Route, Switch } from 'react-router-dom';

import './App.scss';

import HomePage from './components/home-page';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/pages/single-product/single-product';
import NotFound from './components/not-found';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
