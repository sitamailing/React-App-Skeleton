import React, {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
    render() {
        return (
            <div class="container">
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="/journey/stability">Journey</Link></li>
                    <li>Data</li>
                    <li>Research</li>
                    <li>Diary</li>
                    <li>Team</li>
                </ul>
            </div>
        );
    }
}

export default Menu;
