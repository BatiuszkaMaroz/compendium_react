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

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {}

  render() {
    if (this.state.hasError) {
      return <div>An expected error occurred, sorry</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
