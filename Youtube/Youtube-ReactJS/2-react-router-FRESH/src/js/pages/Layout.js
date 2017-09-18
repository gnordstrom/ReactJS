import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  // navigate() {
  //   console.log(this.props);
  //     // the pushState way allows me to click "back" and it will return to previous state
  //   this.props.history.pushState(null, "/")
  //     // Option 2 is to use replaceState which does not give me the option to go back
  // }
  // /*render() {
  //   const { history } = this.props;
  //   console.log(history.isActive("archives"));
  //   return (
  //     <div>
  //       <h1>KillerNews.net</h1>
  //       {this.props.children}
  //       {/*Three different ways to do a button below*/}
  //       <Link to="archives" class="btn btn-success" activeClassName="test">Archives</Link>
  //       <Link to="settings"><button class="btn btn-primary">Settings</button></Link>
  //       <button class="btn btn-danger" onClick={this.navigate.bind(this)}>Featured</button>
  //     </div>
  //   )
  // }*/
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    }
    return (
      <div>
        <Nav location={location}/>

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
