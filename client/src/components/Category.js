import React from 'react';

const Category = ({cat, children, handleCat}) => {
    return (
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value={cat}
              id={cat}
              onChange={handleCat}
            />
            <label htmlFor={cat}>{children}</label>
          </div>
    );
};

export default Category;