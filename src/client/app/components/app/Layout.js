import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    render() {
        this.state = {title: 'title'};
        return (
            <div className="container">
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
