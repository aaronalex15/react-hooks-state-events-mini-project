import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
        <button
        onClick={() => setSelectedCategory(category)}
        className={selectedCategory === category ? "selected" : ""}
        key={category}>{category}
        </button>
        );
  })},  
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
