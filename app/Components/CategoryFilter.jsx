"use client";

import React, { useState, useEffect } from "react";

const CategoryFilter = ({ categories = [], selectedCategory = "", onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || null);

  // Sync with selectedCategory prop
  useEffect(() => {
    setActiveCategory(selectedCategory || null);
  }, [selectedCategory]);

  const handleCategoryClick = (slug) => {
    // Toggle: deselect if clicking the same category
    const newCategory = activeCategory === slug ? "" : slug;
    setActiveCategory(newCategory);

    // Save selected category in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedCategory", newCategory);
    }

    // Notify parent to refetch blogs
    if (onCategoryChange) {
      onCategoryChange(newCategory);
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Category</h2>
      <div className="space-y-2 h-52 overflow-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`border px-3 py-2 rounded cursor-pointer transition-colors ${
              activeCategory === cat?.slug
                ? "bg-[#F39C12] text-white border-[#F39C12]"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleCategoryClick(cat?.slug)}
          >
            {cat?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
