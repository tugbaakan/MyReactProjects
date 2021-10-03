import React, { Component } from 'react'
import withTooltip from './withTooltip';

export class Movie extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Movie</h2>
                {this.props.showTooltip && <h1>Show tool tip</h1> }
            </React.Fragment>
            
        )
    }
}

export default withTooltip(Movie);
