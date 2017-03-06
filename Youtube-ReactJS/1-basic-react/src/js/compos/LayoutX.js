import React from 'react';

import FooterX from "./FooterX";
import HeaderX from "./HeaderX";

export default class LayoutX extends React.Component {
//Example of using a constructor to set the initial state
    // constructor() {
    //     super();
    //     this.state = {name: "Gucci"};
    // }
    constructor() {
        super();
        this.state = {
            title: "Welcome",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }
    render() {
        // To plug many components at once, can use an array
            // var list = [
            //  <HeaderX/>,   
            //  <HeaderX/>,   
            //  <HeaderX/>   
            // ]
        // Using a setTimeout function to change the state internally 
            // setTimeout(() => {
            //     this.setState({name: "Gustav"})
            // }, 4000)

        // Example of how to pass Props to a child component 
            // const title = "Welcome Mr. Gucci!";

            // setTimeout(() => {
            //     this.setState({title: "Welcome Gucci!"});
            // }, 5000);

        return (
            <div>
                {/*{this.state.name}*/}
                {/*<HeaderX title={"Title #2"}/>*/}
                {/*{list}*/}
                <HeaderX changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <FooterX/>
            </div>
        )
    }
}