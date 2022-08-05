import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES 
      // định nghĩa state dishes
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"></NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />  
        {/* truyền  props dishes cho menu*/}
      </div>
    );
  }
}

export default App;