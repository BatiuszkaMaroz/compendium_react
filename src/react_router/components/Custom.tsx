import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

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

const Custom: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <nav>
        <CustomLink to={`${url}`} exact>
          Home
        </CustomLink>
        <CustomLink to={`${url}/about`}>About</CustomLink>
      </nav>
    </div>
  );
};

export default Custom;
