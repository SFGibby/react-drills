import React, {Component} from 'react';

export default class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url} alt = {"chose the most random one I could find"} />
                <div>Error 599</div>
            </div>
        )
    }
}