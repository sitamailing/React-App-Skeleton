import React, {Component} from 'react';
import Factors from './Factors';

class Stability extends Component {
    render() {
        return (
            <div class="journey-content">
                <div class="container">
                    <div class="description">
                        <span>Timothy’s Preterm Diagnosis Summary (Stability)</span>
                        <p>Timothy was born at 25 weeks of gestation, making him an extremely premature baby. Babies born at this age are at risk for the most short term complications and long term health concerns. Timoty’s healthcare team at CHOx will be focused on the stability factors below to address his short term complications</p>
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

export default Stability;
