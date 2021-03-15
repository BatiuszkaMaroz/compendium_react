import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

interface Props {
  to: string;
  exact?: boolean;
}

const CustomLink: React.FC<Props> = ({ to, exact = false, children }) => {
  const match = useRouteMatch({ path: to, exact });

  return (
    <Link to={to}>
      {match && '>> '}
      {children}
      {match && ' <<'}
    </Link>
  );
};

export default CustomLink;
