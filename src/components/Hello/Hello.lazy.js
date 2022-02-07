import React, { lazy, Suspense } from 'react';

const LazyHello = lazy(() => import('./Hello'));

const Hello = props => (
  <Suspense fallback={null}>
    <LazyHello {...props} />
  </Suspense>
);

export default Hello;
