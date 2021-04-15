/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */

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
        <div className='px-5'>
          <p className='lead'>An expected error occurred, sorry</p>
          <button className='btn btn-secondary' onClick={this.acceptError}>
            Accept
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
