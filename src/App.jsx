import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './component/Footer';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';

function App() {
  return (
    <div style={{ fontFamily: 'Poppins' }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
