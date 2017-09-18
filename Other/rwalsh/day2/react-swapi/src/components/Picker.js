import React, { Component } from 'react';

export default class Picker extends Component {
    handleChange(e) {
        console.log(e.target.value);
        this.props.typeChange(Number(e.target.value));
    }
    
    render() {
        // console.log(this.props);
        
        return (
            <div>
                <select onChange={this.handleChange.bind(this)} value={this.props.selected}>
                    {
                        this.props.options.map((item, index) => <option key={item.url} value={index}>{item.label}</option>)
                    }

                </select>
            </div>
        );
    }
};