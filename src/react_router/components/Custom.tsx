import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import CustomLink from './CustomLink';

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
