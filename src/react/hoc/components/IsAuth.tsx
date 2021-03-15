import React from 'react';
import { Redirect } from 'react-router-dom';

interface Props {
  isAuth: boolean;
}

const hoc = <P,>(Component: React.FC<P>): React.FC<P & Props> => {
  const IsAuth: React.FC<P & Props> = ({ isAuth, ...props }) => {
    if (!isAuth) {
      return <Redirect to='/' />;
    }

    return <Component {...(props as P)} />;
  };

  return IsAuth;
};

export default hoc;
