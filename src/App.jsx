import React from 'react';
import { Context } from './components/Context';
import { FilterProducts } from './components/FilterProducts';

export function App() {
  return (
    <Context>
<FilterProducts />
    </Context>
  );
}


