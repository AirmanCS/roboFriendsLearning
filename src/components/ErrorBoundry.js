import { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    return this.state.hasError ? <h1>Error! no good</h1> : this.props.children;
  }
}

export default ErrorBoundry;