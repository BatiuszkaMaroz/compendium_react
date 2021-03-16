/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// import 'react/code_splitting';
// import 'react/context_reducer';
// import 'react/error_boundary';
// import 'react/custom_form_hook';
// import 'react/forward_ref';
// import 'react/hoc';
// import 'react/portal';

// import './react_router';

import './react_transition_group';

const p1 = { name: 'John', surname: 'Doe', age: 0 };

type Person = typeof p1;
type Keys = keyof Person;
type KeyedObject = { [K in Keys]: any };

const p2: KeyedObject = {
  name: 'John',
  surname: 'Snow',
  age: 69,
};

function clone<T>(
  base: T, //
  clone: { [K in keyof T]: any },
): T {
  return clone;
}

const c1 = clone(p2, { name: 'John', surname: 'Pattison', age: 100 });
