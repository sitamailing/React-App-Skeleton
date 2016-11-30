import React, {Component} from 'react';
import {Link} from 'react-router';

class JourneyLevel extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to="/journey/stability">Stability</Link></li>
                        <li><Link to="/journey/development">Development</Link></li>
                        <li><Link to="/journey/growth">Growth</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default JourneyLevel;
