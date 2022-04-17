import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import logo from '../Components/logo1.png';
class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                            <img src={logo} alt="" style={{width:"40px"}}/>
                            Dashboard
                        </NavbarBrand>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default NavigationBar;