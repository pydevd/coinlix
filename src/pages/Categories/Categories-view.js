import React from 'react';
import {Typography} from 'antd';
import CategoryAddForm from './CategoryAddForm';
import CategoriesList from "./CategoriesList";


const Categories = () => {
  return (
    <div>
      <Typography.Title level={4}>Categories</Typography.Title>
      <CategoryAddForm/>
      <CategoriesList/>
    </div>
  )
};

export default Categories;