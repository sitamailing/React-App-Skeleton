import React, {Component} from 'react';
import {Link} from 'react-router';

class Factors extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link path="/journey/stability/respiratory">Respiratory</Link></li>
                    <li><Link path="/journey/stability/respiratory">Heart</Link></li>
                    <li><Link path="/journey/stability/respiratory">Brain</Link></li>
                    <li><Link path="/journey/stability/respiratory">Heart</Link></li>
                </ul>
            </div>
        );
    }
}

export default Factors;
