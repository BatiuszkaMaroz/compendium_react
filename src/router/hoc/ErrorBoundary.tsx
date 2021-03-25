/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  errorPath: string;
}
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
    const { errorPath } = this.props;

    if (this.state.hasError) {
      return (
        <div>
          <p>An error occurred</p>
          <Link to={errorPath}>Go Home</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
