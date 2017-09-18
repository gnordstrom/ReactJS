import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  // /*render() {
  //   console.log(this.props);
  //   const { query } = this.props.location;
  //   const { date } = query;

  //   const { params } = this.props;
  //   const { article } = params;
  //   return (
  //     <div>
  //       {/*<h1>Archives ({this.props.params.article})</h1>*/}
  //       {/*<h1>Archives ({params.article})</h1>*/}
  //       <h1>Archives ({article})</h1>
  //       <h3>Date: {date}</h3>
  //     </div>
  //   )
  // }*/
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date } = query;

    const Articles = [
      "Article 1",
      "Article 2",
      "Article 3",
      "Article 4",
      "Article 5",
      "Article 6",
      "FAKE NEWS"
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Archives</h1>
        Article: {article}, date: {date}
        <div class="row">{Articles}</div>
      </div>
    )
  }
}
