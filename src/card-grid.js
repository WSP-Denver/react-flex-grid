import React, {Component} from "react";

class CardGrid extends Component {
  render () {
    return (
      <div className="content" >
        <div className="flex-container" >
          <Card color="#ffe4e4" title="salmon" />
          <Card color="#ffae5b" title="orange sherbert" />
          <Card color="#eee4e4" title="eggshell" />
          <Card color="#d0bdd4" title="lavender" />
          <Card color="#cde4e4" title="ocean" />
          <Card color="#dae4e4" title="sea breeze" />
          <Card color="#5ddfff" title="palapa" />
        </div>
      </div>
    );
  }
}

class Square extends Component {
  render() {
    var squareStyle = {
      width: "100%",
      height: 150,
      background: this.props.color
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "center",
      // backgroundSize: "cover"
    };
    return (
      <div style={squareStyle} ></div>
    );
  }
}

class Label extends Component {
  render() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      textAlign: "center",
      letterSpacing: 1,
      margin: 0
    };
    return (
      <p style={labelStyle}>{this.props.title}</p>
    );
  }
}

class Card extends Component {
  render () {
    var cardStyle = {
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: "45%",
      marginRight: "2.5%",
      marginBottom: 32,
      padding: 0,
      // maxWidth: "30.5%",
      backgroundColor: "#fff",
      WebkitFilter: "drop-shadow(0px 0px 5px #cacaca)",
      filter: "drop-shadow(0px 0px 5px #cacaca)"
    };

    return (
      <div className="card" style={cardStyle}>
        <Square color={this.props.color} />
        <Label title={this.props.title} />
      </div>
    );
  }
}

export default  CardGrid;
