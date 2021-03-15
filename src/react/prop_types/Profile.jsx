/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import PT from 'prop-types';

const Profile = () => {
  return <div></div>;
};

Profile.propTypes = {
  name: PT.string.isRequired,
  age: PT.number,
  married: PT.bool,
  hobbies: PT.arrayOf(PT.number),
};

Profile.defaultProps = {
  age: 69,
  married: false,
};

export default Profile;
