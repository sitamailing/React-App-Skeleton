import React, {Component} from 'react';
import Feed from './Feed';

class Home extends Component {
    render() {
        return (
            <div class="home-container">
                <div class="container">
                    <div class="sub-container">
                        <div class="home-tabs">
                            <div class="home-tab home-tab-left">
                                <span>
                                    <h2>Journey</h2>
                                    <p>View Visuals of Timothy's health data, refresh insights and direclty communicate with the health care team</p>
                                </span>
                            </div>
                            <div class="home-tab home-tab-right">
                                <span>
                                    <h2>Journey</h2>
                                    <p>View Visuals of Timothy's health data, refresh insights and direclty communicate with the health care team</p>
                                </span>
                            </div>
                        </div>
                        <Feed/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;