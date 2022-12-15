import React from "react";

const Category = ({ catName, cat, children, handleCat }) => {
  return (
    <div className="cat">
      <input
        type="radio"
        name="cat"
        value={catName}
        id={catName}
        checked={cat === catName}
        onChange={handleCat}
      />
      <label htmlFor={catName}>{children}</label>
    </div>
  );
};

export default Category;
