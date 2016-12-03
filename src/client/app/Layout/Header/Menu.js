import React, {Component} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
    render() {
        return (
            <div class="navigation">
                <ul>
                    <li><Link to="home" activeClassName="active">Home</Link></li>
                    <li><Link to="/journey/stability" activeClassName="active">Journey</Link></li>
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
