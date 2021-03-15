/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';

interface Props {}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  acceptError = () => {
    this.setState({ hasError: false });
  };

  componentDidCatch(error: any, errorInfo: any) {}

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>An expected error occurred, sorry</p>
          <button onClick={this.acceptError}>Accept</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
