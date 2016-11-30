import React, {Component} from 'react';
import {Link} from 'react-router';

class Factors extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link path="/journey/stability/respiratory">Weight Gain</Link></li>
                    <li><Link path="/journey/stability/respiratory">Height</Link></li>
                    <li><Link path="/journey/stability/respiratory">Head Circumference</Link></li>
                </ul>
            </div>
        );
    }
}

export default Factors;
