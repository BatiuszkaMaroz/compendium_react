/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.module.scss' {
  const styles: { readonly [key: string]: string };
  export default styles;
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
