import React, {Component} from 'react';
import {Link} from 'react-router';

class Factors extends Component {
    render() {
        return (
            <div class="factors">
                <div class="container">
                    <ul>
                        <li><Link path="/journey/stability/respiratory">Respiratory</Link></li>
                        <li><Link path="/journey/stability/respiratory">Heart</Link></li>
                        <li><Link path="/journey/stability/respiratory">Brain</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Factors;
