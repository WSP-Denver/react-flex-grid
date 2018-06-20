import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import CardGrid from './card-grid.js';
import Footer from './footer';
// eslint-disable-next-line
import Aside from './aside';
import './index.css';

var menu = document.getElementById('menu');
var root = document.getElementById('root');

class Content extends React.Component {
    render() {
      var contentStyle = {
            margin: "0 auto",
            width: "80%",
            maxWidth: 1280,
            backgroundColor: this.props.color
          };
      return (
        <div className="content-wrapper" style={contentStyle} >
          <h1 className="title" >{this.props.title}</h1>
          <p>Grid created using React</p>
          <div>
            <CardGrid />
            {/* <Aside /> ******* UNCOMMENT TO ADD SIDE LIST ITEM *****/}
          </div>
        </div>
      );
    }
}


ReactDOM.render (
  <Navigation />,
  menu
);
ReactDOM.render (
  <div className="root-inner" >
    <Content title="Grid Example Using Flex" />
    <Footer />
  </div>,
  root
);
