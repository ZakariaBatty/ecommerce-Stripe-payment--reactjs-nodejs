import React, { Suspense } from 'react';

const CONTEXT_REGISTER = [
  './entities/ProductsContext',
  './entities/CartContext',
];

const getProviders = () =>
  CONTEXT_REGISTER.map(context_relative_path =>
    React.lazy(() => import(`${context_relative_path}`))
  );

const ContextManagerProvider = ({ children }) => {
  const providers = getProviders();
  const providersToDOM = providers.reduce(
    (Inner, Outer) => <Outer>{Inner}</Outer>,
    children
  );

  return <Suspense fallback={<div>Loading...</div>}>{providersToDOM}</Suspense>;
};

export default ContextManagerProvider;
