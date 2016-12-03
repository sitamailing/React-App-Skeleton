import React, {Component} from 'react';

class Feed extends Component {
    render() {
        return (
            <div class="feeds">
                <div class="feed-options">
                    <ul>
                        <li>Latest Update</li>
                        <li>Insight</li>
                        <li>Communication</li>
                        <li>New Content</li>
                    </ul>
                </div>
                <div class="feed-content">
                </div>
            </div>
        );
    }
}

export default Feed;
