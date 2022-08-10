import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import StaffList from './components/StaffListComponents';
import { STAFFS } from './shared/staffs';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS 
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
        {/* đặt tên prop đc truyền, sẽ được sử dụng là  */}
      </div>
    );
  }
}

export default App;