import React, {Component} from 'react';
import env from 'dotenv';
import Header from './Header';
import Footer from './Footer';

env.load();

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
