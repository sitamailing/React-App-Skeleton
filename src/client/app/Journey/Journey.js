import React, {Component} from 'react';
import JourneyLevel from './JourneyLevel';

class Journey extends Component {
    render() {
        return (
            <div class="main-container">
                <JourneyLevel/>
                {this.props.children}
            </div>
        );
    }
}

export default Journey;
