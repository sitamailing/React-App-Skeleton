import React, {Component} from 'react';
import Header from './Header/Header';

class Layout extends Component {
    render() {
        return (
            <div class="main-container">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
