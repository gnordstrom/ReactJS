import React from "react";

import TitleX from "./HeaderX/TitleX";

export default class HeaderX extends React.Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        // console.log(this.props)
        return (
            // <header>Header Component</header>
            <div>
                <TitleX title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}