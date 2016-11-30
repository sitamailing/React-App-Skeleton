import React, {Component} from 'react';
import Menu from './Menu';

class Header extends Component {
    render() {
        return (
            <div class="container">
                <div>
                    <h1>NicoBoard</h1>
                </div>
                <Menu/>
            </div>
        );
    }
}

export default Header;
