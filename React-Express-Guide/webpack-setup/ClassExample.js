import React, { Component } from 'react';

class Card extends Component {
    render() {
        const style = {
            margin: 20,
            padding: 20,
            color: 'white',
            backgroundColor: this.props.color,
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default Card;