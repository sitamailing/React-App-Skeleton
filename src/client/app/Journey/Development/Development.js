import React, {Component} from 'react';
import Factors from './Factors';

class Development extends Component {
    render() {
        return (
            <div class="journey-content">
                <div class="container">
                    <div class="description">
                        <span>Timothy’s Preterm Diagnosis Summary (Development)</span>
                        <p>Extremely premature babies like Timothy are born very small and typically grow more slowly than babies born at full term. During Timothy’s NICU stay, the CHOx healthcare team will measure his weight, height, and head circumference reqularly, taking this information into Consideration with his overall health.</p>
                    </div>
                    <div class="pregnancy-details">
                        <table>
                            <thead>
                                <tr>
                                    <th>Preterm stage</th>
                                    <th>Week of Pregnancy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mild</td>
                                    <td>35 - 36</td>
                                </tr>
                                <tr>
                                    <td>Moderate</td>
                                    <td>32 - 34</td>
                                </tr>
                                <tr>
                                    <td>Very</td>
                                    <td>28 - 31</td>
                                </tr>
                                <tr class="extreme-level">
                                    <td>Extreme</td>
                                    <td>Less than 28</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Factors/>
            </div>
        );
    }
}

export default Development;
