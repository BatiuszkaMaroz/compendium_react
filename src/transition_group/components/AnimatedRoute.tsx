import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const AnimatedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  return (
    <Route exact {...props}>
      {({ match }) => (
        <CSSTransition
          classNames='fade'
          in={match !== null}
          timeout={300}
          unmountOnExit
        >
          <div className='page'>{children}</div>
        </CSSTransition>
      )}
    </Route>
  );
};

export default AnimatedRoute;
