import React from 'react';
import { Link } from 'react-router-dom';

const categories = ["Category1", "Category2", "Category3"];

const CategoriesComponent = () => (
    <div>
        <h2>Categories</h2>
        {categories.map((category) => (
            <Link key={category} to={`/category/${category.toLowerCase()}`}>
                {category}
            </Link>
        ))}
    </div>
);

export default CategoriesComponent;
