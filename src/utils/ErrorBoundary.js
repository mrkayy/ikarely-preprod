import React, { Component } from "react";
import Error from '../Pages/Error/Error'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) return <Error />;
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
