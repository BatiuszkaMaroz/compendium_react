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
          <div className='position-absolute col-6 offset-3'>{children}</div>
        </CSSTransition>
      )}
    </Route>
  );
};

export default AnimatedRoute;
