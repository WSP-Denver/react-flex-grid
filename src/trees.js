import React, {Component} from "react";

class Display extends Component {
  render() {
    return (
      /* The code within the "fragment" is generated without the need for a parent <div> */
      <React.Fragment>
        <h2>{this.props.title}</h2>
        <p>Cras eget venenatis augue, sed imperdiet elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et pharetra sapien. Sed ac dapibus augue, sed pretium ipsum. Etiam sed pulvinar enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eleifend quam sed purus gravida, volutpat vestibulum metus feugiat. Aenean molestie sit amet erat et rutrum. Suspendisse non orci eleifend, faucibus felis et, consectetur sem. Donec urna ligula, porta et fermentum eget, dapibus efficitur nisl. Etiam faucibus elit eget risus egestas vestibulum.</p>
        <h3>{this.props.intro}</h3>
        <p>Curabitur mollis non est ac tempus. Proin maximus placerat erat, at mattis libero dignissim in. Duis eu quam nec odio feugiat cursus. Vivamus arcu augue, consequat in neque non, consectetur cursus nibh. Donec quis aliquet ante. Nunc et ipsum rutrum, convallis ex non, molestie turpis. Pellentesque est arcu, ornare sed eleifend eget, vehicula sed sem.</p>
        <h4>{this.props.heading}</h4>
        <p>Sed ac dapibus augue, sed pretium ipsum. Etiam sed pulvinar enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eleifend quam sed purus gravida, volutpat vestibulum metus feugiat. Aenean molestie sit amet erat et rutrum. Suspendisse non orci eleifend, faucibus felis et, consectetur sem. Donec urna ligula, porta et fermentum eget, dapibus efficitur nisl. Etiam faucibus elit eget risus egestas vestibulum.</p>
      </React.Fragment>
    );
  }
}

class Text extends Component {
  render() {
    return (
      <Display {...this.props} />
    );
  }
}

class MoreInfo extends Component {
  render () {
    return (
      <div>
        <Text {...this.props} />
      </div>
    );
  }
}

class Trees extends Component {
  render() {
    var treesStyles = {
      width: "80%",
      maxWidth: "1280",
      margin: "0 auto 2rem auto",
      padding: 0
    };
    var imgStyles = {
      display: "block",
      margin: "0 16px 16px 0",
      float: "left",
      width: 300
    }
    return(
      <div id="trees" className="trees-section clearfix" style={treesStyles} >
        <MoreInfo title="New Section: Trees..." intro=" Maecenas Vel Mi Pulvinar" heading="Lorem Ipsum" />
        <React.Fragment>
          <img src="/images/aerial-forest-coast.jpg" style={imgStyles} alt="Reversed aerial view of coastal forest" ></img>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eleifend quam sed purus gravida, volutpat vestibulum metus feugiat. Aenean molestie sit amet erat et rutrum. Suspendisse non orci eleifend, faucibus felis et, consectetur sem.</p>
          <p>Maecenas vel mi pulvinar, pharetra diam sed, volutpat mi. Pellentesque sagittis, tellus sed rutrum mollis, lorem quam dapibus lorem, a porttitor tellus nunc sed sem. Pellentesque vehicula et eros et tincidunt. In mattis ex ipsum, ac convallis leo malesuada non. In faucibus, metus a sodales sollicitudin, enim enim porttitor nisi, nec volutpat urna dolor non lorem. Quisque non lacinia ligula. Nam dictum maximus lacus sed bibendum. Suspendisse non dolor pulvinar, gravida nunc quis, luctus justo. Nullam ut justo tortor. Donec a nisi eros.</p>
        </React.Fragment>
      </div>
    );
  }
}

export default Trees;
