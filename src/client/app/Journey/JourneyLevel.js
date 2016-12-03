import React, {Component} from 'react';
import {Link} from 'react-router';

class JourneyLevel extends Component {
    render() {
        return (
            <div class="journey-level">
                <Link to="/journey/stability" activeClassName="active">
                    <div class="stability">Stability</div>
                </Link>
                <Link to="/journey/development" activeClassName="active">
                    <div class="development"><span>Development</span></div>
                </Link>
                <Link to="/journey/growth" activeClassName="active">
                    <div class="growth"><span>Growth</span></div>
                </Link>
            </div>
        );
    }
}

export default JourneyLevel;
