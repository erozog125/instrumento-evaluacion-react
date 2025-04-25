import React from 'react'
import { Product } from './Product'
import { products } from '../assets/products.js'
import { useState } from 'react'

export const FilterProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
}

