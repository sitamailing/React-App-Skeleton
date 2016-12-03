import React, {Component} from 'react';
import Menu from './Menu';

class Header extends Component {
    render() {
        return (
            <div class="header-container">
                <div class="container">
                    <div class="title">
                        <h1>NICU Patient</h1>
                    </div>
                    <Menu/>
                </div>
            </div>
        );
    }
}

export default Header;
