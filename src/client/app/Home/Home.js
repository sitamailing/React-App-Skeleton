import React, {Component} from 'react';
import Feed from './Feed';

class Home extends Component {
    render() {
        return (
            <div class="container home-container">
                <div class="sub-container">
                    <div>
                        <div class="left-tab">
                            <span>
                                <h2>Journey</h2>
                                <p>View Visuals of Timothy's health data, refresh insights and direclty communicate with the health care team</p>
                            </span>
                        </div>
                        <div class="right-tab">
                            <span>
                                <h2>Journey</h2>
                                <p>View Visuals of Timothy's health data, refresh insights and direclty communicate with the health care team</p>
                            </span>
                        </div>
                    </div>
                    <Feed/>
                </div>
            </div>
        );
    }
}

export default Home;