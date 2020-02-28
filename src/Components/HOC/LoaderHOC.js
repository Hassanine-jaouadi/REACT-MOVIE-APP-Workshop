import React, { Component } from "react";
import "./LoaderStyle.css";

// HOC is a function (LoaderHOC) , it will accept a component (wrappedComponent) as parameter
// and it will return a  new component
const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
      setTimeout(() => {
        this.setState({
          isLoading: false
        });
      }, 5000);
    }
    render() {
      return this.state.isLoading ? (
        <div className="loader"></div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default LoaderHOC;
